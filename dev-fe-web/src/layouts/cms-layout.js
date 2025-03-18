import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppSidebar } from "@/components/admin/custom/app-sidebar";
import CMSHeader from "@/components/admin/custom/cms-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
const CMSLayout = ({ children, title }) => {
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs(SidebarInset, { children: [_jsx(CMSHeader, { title: title }), _jsx("div", { className: "mt-16 flex flex-1 flex-col gap-4 p-4 overflow-y-auto h-[calc(100vh-4rem)]", children: children })] })] }));
};
export default CMSLayout;
