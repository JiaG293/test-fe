import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();
    const { login } = useAuth();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userInfo = await login(username, password);
            console.log("User info:", userInfo);
            if (userInfo?.roles?.includes("realm-management")) {
                window.location.href = "/admin/home";
            }
            else {
                window.location.href = "/portal/home";
            }
        }
        catch (error) {
            console.error("Login failed", error);
        }
    };
    return (_jsxs("div", { className: "relative z-10 shadow-lg w-full max-w-6xl min-h-[600px] flex flex-col md:flex-row", children: [_jsxs("div", { className: "w-full h-60 md:h-auto md:w-1/2 bg-[url('/src/assets/img/login_bg.jpg')] bg-cover relative flex items-center justify-center", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black opacity-60" }), _jsxs("div", { className: "z-10 text-center text-white", children: [_jsx("h1", { className: "text-5xl font-mono", style: { fontFamily: "Monoton, cursive" }, children: "Room X" }), _jsx("h4", { className: "text-lg mt-4", children: t("label_slogan") })] })] }), _jsxs("div", { style: { backgroundColor: "hsl(var(--background))" }, className: "w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-8 md:px-12 ", children: [_jsx("h2", { className: "text-2xl font-bold text-[-var(--foreground)] mb-6", children: t("button_dang_nhap") }), _jsxs("form", { className: "w-full", onSubmit: handleLogin, children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "account", className: "block text-[var(--foreground)] font-medium mb-2", children: t("label_tai_khoan") }), _jsx("input", { type: "text", id: "account", className: "w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition duration-300 bg-transparent rounded-md", placeholder: t("placeholder_tai_khoan"), required: true, value: username, onChange: (e) => setUsername(e.target.value), onInvalid: (e) => e.target.setCustomValidity(t("warning_nhap_tai_khoan")), onInput: (e) => e.target.setCustomValidity("") })] }), _jsxs("div", { className: "mb-6 relative", children: [_jsx("label", { htmlFor: "password", className: "block text-[var(--foreground)] font-medium mb-2", children: t("label_mat_khau") }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: showPassword ? "text" : "password", id: "password", className: "w-full border-b-2 border-gray-300 p-3 pr-10 focus:outline-none focus:border-blue-500 transition duration-300 bg-transparent rounded-md", placeholder: t("placeholder_mat_khau"), required: true, value: password, onChange: (e) => setPassword(e.target.value), onInvalid: (e) => e.target.setCustomValidity(t("warning_nhap_mat_khau")), onInput: (e) => e.target.setCustomValidity("") }), _jsx("div", { onClick: togglePasswordVisibility, className: "absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer", "aria-label": showPassword ? "Hide password" : "Show password", children: showPassword ? _jsx(FaEyeSlash, { size: 20 }) : _jsx(FaEye, { size: 20 }) })] })] }), _jsx("button", { type: "submit", className: "w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg", children: t("button_dang_nhap") })] }), _jsx("p", { className: "mt-6 text-gray-600", children: _jsx(Link, { to: "/forgot-password", className: "text-blue-500 font-medium hover:no-underline", children: t("link_quen_mat_khau") }) })] })] }));
};
export default LoginForm;
