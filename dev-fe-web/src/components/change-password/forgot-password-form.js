import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
    // const { resetPassword } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }
        try {
            const keycloakUrl = import.meta.env.VITE_KEYCLOAK_URL;
            const realm = import.meta.env.VITE_KEYCLOAK_REALM;
            const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
            const response = await fetch(`${keycloakUrl}/realms/${realm}/login-actions/reset-credentials?client_id=${clientId}`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({ username: email }),
            });
            if (response.ok) {
                alert("Check your email for the reset password link!");
            }
            else {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert(errorData.error_description || "Failed to send reset email.");
            }
        }
        catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please try again later.");
        }
    };
    return (_jsxs("div", { className: "flex items-center justify-center min-h-screen bg-[url('/src/assets/img/login_bg.jpg')] bg-cover bg-center dark:bg-[url('/src/assets/img/login_bg.jpg')] dark:bg-cover dark:bg-center] text-foreground", children: [_jsx("div", { style: { backgroundColor: "hsl(var(--background))" }, className: "absolute top-0 left-0 w-full h-full opacity-50 blur-lg" }), _jsxs("div", { className: "w-full max-w-md p-6 rounded-lg shadow-lg bg-card text-card-foreground shadow-gray-700 dark:shadow-gray-900 z-20", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Forgot Password" }), _jsx("p", { className: "text-muted-foreground text-center text-sm mb-6", children: "Enter your email to receive a password reset link." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1 text-foreground", children: "Email Address" }), _jsx("input", { type: "email", className: "w-full p-3 bg-input text-foreground rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold py-2 rounded-lg transition duration-300", children: "Send Reset Link" })] })] })] }));
};
export default ForgotPasswordForm;
