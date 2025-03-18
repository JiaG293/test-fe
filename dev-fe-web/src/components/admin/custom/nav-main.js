"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export function NavMain({ items, }) {
    const location = useLocation(); // Lấy location hiện tại từ react-router-dom
    const [activeItem, setActiveItem] = useState(location.pathname); // Khởi tạo activeItem từ URL hiện tại
    // Cập nhật activeItem khi location thay đổi
    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location]);
    return (_jsx(SidebarGroup, { children: _jsx(SidebarMenu, { children: items.map((item) => {
                const isItemActive = activeItem === item.url; // Kiểm tra nếu item đang được chọn
                return (_jsx(SidebarMenuItem, { className: `${isItemActive
                        ? 'bg-blue-300 text-white border-l-4 border-blue-400' // Đổi màu nền và thêm viền cho mục được chọn
                        : 'bg-transparent'} rounded-md`, children: _jsx(Link, { to: item.url, children: _jsxs(SidebarMenuButton, { tooltip: item.title, className: "bg-transparent border-none flex items-center p-2 rounded-md" // Loại bỏ focus và hover effects
                            , children: [item.icon && (_jsx(item.icon, { className: `mr-3 text-md ${item.color || 'text-gray-600'}` })), _jsx("span", { className: `text-sm font-medium ${isItemActive ? 'text-white' : 'text-gray-900'}`, children: item.title }), isItemActive && (_jsx(ChevronRight, { className: "ml-auto text-lg text-white" }))] }) }) }, item.title));
            }) }) }));
}
