import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import i18next from "@/locales/i18n.config";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/admin/custom/theme-provider";
import { AuthProvider } from "@/context/AuthProvider";
import { RootRouter } from "@/routes/RootRouter";
import { Toaster } from "@/components/ui/sonner";
function App() {
    return (_jsx(AuthProvider, { children: _jsx(I18nextProvider, { i18n: i18next, children: _jsxs(ThemeProvider, { storageKey: "vite-ui-theme", children: [_jsx(RouterProvider, { router: RootRouter }), _jsx(Toaster, {})] }) }) }));
}
export default App;
