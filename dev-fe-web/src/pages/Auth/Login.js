import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LanguageSelect } from "@/components/admin/custom/select-language";
import { ThemeToggle } from "@/components/admin/custom/theme-toggle";
import LoginForm from "@/components/login/login-form";
import { useTranslation } from "react-i18next";
const Login = () => {
    const { t } = useTranslation();
    return (
    /* Container */
    _jsxs("div", { className: "flex min-h-screen justify-center items-center relative bg-[url('/src/assets/img/login_bg.jpg')] bg-cover bg-center", children: [_jsx("div", { style: { backgroundColor: "hsl(var(--background))" }, className: "absolute top-0 left-0 w-full h-full opacity-50 blur-lg" }), _jsxs("div", { className: "absolute top-4 right-4 z-20 flex gap-4", children: [_jsx(ThemeToggle, {}), _jsx(LanguageSelect, {})] }), _jsxs("div", { className: "z-10 w-full flex flex-col items-center", children: [_jsx("br", {}), _jsx(LoginForm, {}), _jsx("div", { className: "mt-6 text-center text-md text-[var(--foreground)]", children: _jsx("p", { children: t("label_footer") }) })] })] }));
};
export default Login;
