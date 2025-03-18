import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import keycloak from "@/configs/keycloak.config";
import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return !!Cookies.get("token");
    });
    const [token, setToken] = useState(Cookies.get("token") || null);
    useEffect(() => {
        keycloak
            .init({
            onLoad: "check-sso",
            silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
            checkLoginIframe: false,
        })
            .then((authenticated) => {
            if (authenticated && keycloak.token) {
                setIsAuthenticated(true);
                setToken(keycloak.token);
                Cookies.set("token", keycloak.token, {
                    expires: 1,
                    secure: true,
                    sameSite: "Strict",
                });
                Cookies.set("refreshToken", keycloak.refreshToken || "", {
                    expires: 1,
                    secure: true,
                    sameSite: "Strict",
                });
            }
        })
            .catch((err) => console.error("Keycloak initialization failed", err));
    }, []);
    // Đăng nhập bằng API của Keycloak
    const login = async (username, password) => {
        const params = new URLSearchParams();
        params.append("client_id", keycloak.clientId || "");
        params.append("grant_type", "password");
        params.append("username", username);
        params.append("password", password);
        params.append("scope", "openid");
        params.append("client_secret", import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET || "");
        try {
            const response = await axios.post(`${keycloak.authServerUrl}/realms/${keycloak.realm}/protocol/openid-connect/token`, params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
            const data = response.data;
            keycloak.token = data.access_token;
            keycloak.refreshToken = data.refresh_token;
            setToken(data.access_token);
            setIsAuthenticated(true);
            Cookies.set("token", data.access_token, {
                expires: 1 / 96,
                secure: true,
                sameSite: "Strict",
            });
            Cookies.set("refreshToken", data.refresh_token || "", {
                expires: 7,
                secure: true,
                sameSite: "Strict",
            });
            const decodedToken = jwtDecode(data.access_token);
            const roles = decodedToken.aud || [];
            console.log(roles);
            const userInfo = {
                email: decodedToken?.email,
                username: decodedToken?.preferred_username,
                roles,
            };
            return userInfo;
        }
        catch (error) {
            console.error("Login error:", error);
        }
    };
    const logout = async () => {
        console.log("Logging out...");
        try {
            const refreshToken = Cookies.get("refreshToken");
            if (!refreshToken)
                throw new Error("No refresh token found");
            const params = new URLSearchParams();
            params.append("client_id", import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "");
            params.append("refresh_token", refreshToken);
            params.append("client_secret", import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET || "");
            // Gửi yêu cầu logout đến Keycloak
            await axios.post(`${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}/protocol/openid-connect/logout`, params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
            // Xóa token khỏi cookie
            Cookies.remove("token");
            Cookies.remove("refreshToken");
            // Cập nhật state
            setIsAuthenticated(false);
            setToken(null);
            window.location.href = "/login";
        }
        catch (error) {
            console.error("Logout error:", error);
        }
    };
    const getUserInfo = () => {
        const token = Cookies.get("token");
        if (!token)
            return null;
        try {
            const decoded = jwtDecode(token);
            return {
                email: decoded.email,
                username: decoded.preferred_username,
            };
        }
        catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    };
    const resetPassword = async (email) => {
        ///
    };
    return (_jsx(AuthContext.Provider, { value: {
            isAuthenticated,
            token,
            login,
            logout,
            getUserInfo,
            resetPassword,
        }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
