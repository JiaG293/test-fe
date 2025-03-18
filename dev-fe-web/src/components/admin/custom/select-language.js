import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent, SelectItem, SelectTrigger, } from "@/components/ui/select";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
export const LanguageSelect = ({ position = "bottom" }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language || "en");
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
            setLanguage(savedLanguage);
        }
    }, [i18n]);
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        setLanguage(lang);
    };
    return (_jsxs(Select, { onValueChange: handleChangeLanguage, value: language, children: [_jsx(SelectTrigger, { className: "p-2 bg-transparent border-none outline-none focus:ring-0 focus-visible:ring-0 flex items-center", "aria-label": "Select language", children: position === "bottom" ? (_jsx(Languages, { className: "w-5 h-5 cursor-pointer" })) : (_jsx("span", { className: "text-sm font-normal -ml-2", children: "Ng\u00F4n ng\u1EEF" })) }), _jsxs(SelectContent, { side: position, className: position === "right" ? "ml-2" : "", children: [_jsx(SelectItem, { value: "vi", children: "Ti\u1EBFng Vi\u1EC7t" }), _jsx(SelectItem, { value: "en", children: "English" })] })] }, language));
};
