import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-select";
const CMSHeader = ({ title }) => {
    return (_jsx("header", { className: "bg-[var(--header-background)] border-b border-[var(--header-border)] shadow-sm fixed z-50 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full", children: _jsxs("div", { className: "flex items-center gap-2 px-4", children: [_jsx(SidebarTrigger, { className: "-ml-1" }), _jsx(Separator, { "aria-orientation": "vertical", className: "mr-2 h-4" }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { className: "hidden md:block", children: _jsx(BreadcrumbLink, { href: "#", children: "Trang qu\u1EA3n tr\u1ECB" }) }), _jsx(BreadcrumbSeparator, { className: "hidden md:block" }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: title }) })] }) })] }) }));
};
export default CMSHeader;
