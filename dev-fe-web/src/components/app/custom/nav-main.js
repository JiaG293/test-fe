"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
export function NavMain({ items, }) {
    return (_jsx(SidebarGroup, { children: _jsx(SidebarMenu, { children: items.map((item, index) => {
                // Danh sách màu sắc đa dạng
                const colors = ["text-blue-500", "text-purple-500", "text-green-500", "text-orange-500", "text-red-500"];
                const bgColors = ["bg-blue-100", "bg-purple-100", "bg-green-100", "bg-orange-100", "bg-red-100"];
                const borderColors = ["border-blue-400", "border-purple-400", "border-green-400", "border-orange-400", "border-red-400"];
                const colorClass = colors[index % colors.length];
                const bgColorClass = bgColors[index % bgColors.length];
                const borderColorClass = borderColors[index % borderColors.length];
                return (_jsx(SidebarMenuItem, { className: `rounded-lg ${bgColorClass} ${borderColorClass} border-2 hover:bg-opacity-80 hover:scale-105 hover:shadow-lg hover:border-2 transition-all duration-300 p-2`, children: _jsx(SidebarMenuButton, { asChild: true, children: _jsxs(Link, { to: item.url, className: "flex items-center space-x-3", children: [item.icon && _jsx(item.icon, { className: `w-6 h-6 ${colorClass} transition-all duration-300` }), _jsx("span", { className: "text-sm font-semibold text-gray-900 hover:text-gray-800 transition-colors duration-300", children: item.title })] }) }) }, item.title));
            }) }) }));
}
