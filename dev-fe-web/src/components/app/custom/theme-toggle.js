import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/admin/custom/theme-provider";
export const ThemeToggle = ({ variant = "icon" }) => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return variant === "switch" ? (_jsxs("div", { onClick: toggleTheme, className: "flex items-center justify-between w-full py-1 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-800", children: [_jsx("span", { children: "Dark mode" }), _jsx("div", { className: "relative w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1", children: _jsx("div", { className: `absolute bg-white w-4 h-4 rounded-full shadow-md ${theme === "dark" ? "translate-x-5" : "translate-x-0"}` }) })] })) : (_jsx("div", { onClick: toggleTheme, className: "cursor-pointer flex justify-center items-center", children: theme === "dark" ? _jsx(Sun, { className: "w-5 h-5" }) : _jsx(Moon, { className: "w-5 h-5" }) }));
};
