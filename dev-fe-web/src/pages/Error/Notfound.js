import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
const Notfound = () => {
    const { t } = useTranslation();
    return (_jsxs("div", { style: { backgroundColor: "hsl(var(--background))" }, className: "flex flex-col items-center justify-center h-screen text-[var(--foreground)]", children: [_jsx("h1", { className: "text-9xl font-extrabold tracking-widest animate-pulse", children: "404" }), _jsx("p", { className: "text-xl md:text-2xl mt-4 opacity-80 animate-fade-in", children: t("label_404") }), _jsx("div", { className: "absolute -z-10 w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl animate-floating" })] }));
};
export default Notfound;
