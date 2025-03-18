"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarCheck, Clock, Users, Bell, User, Settings, Hourglass, LogOut, } from "lucide-react";
import { NavMain } from "@/components/app/custom/nav-main";
import { Sidebar, SidebarContent, SidebarMenuButton } from "@/components/ui/sidebar";
export function AppSidebar({ ...props }) {
    const data = {
        navMain: [
            { title: "Lịch của tôi", url: "/portal/home", icon: CalendarCheck },
            { title: "Đặt lịch", url: "/portal/booking", icon: Clock },
            { title: "Lịch chờ duyệt", url: "/portal/pending", icon: Hourglass },
            { title: "Gợi ý đặt lịch", url: "/portal/suggestions", icon: Bell },
            { title: "Nhóm", url: "/portal/groups", icon: Users },
            { title: "Hồ sơ", url: "/portal/profile", icon: User },
            { title: "Cài đặt", url: "/portal/settings", icon: Settings },
        ],
    };
    return (_jsx(Sidebar, { collapsible: "icon", ...props, children: _jsxs(SidebarContent, { className: "mt-16 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-200 text-white shadow-lg h-[calc(100vh-4rem)] font-poppins flex flex-col", children: [_jsx(NavMain, { items: data.navMain }), _jsx("div", { className: "mt-auto", children: _jsx(SidebarMenuButton, { asChild: true, children: _jsxs("a", { href: "/logout", className: " flex items-center space-x-3 p-6 text-red-500 hover:bg-opacity-80 transition rounded-lg bg-red-100", children: [_jsx(LogOut, { className: "w-6 h-6" }), _jsx("span", { className: "text-sm font-semibold", children: "\u0110\u0103ng xu\u1EA5t" })] }) }) })] }) }));
}
export default AppSidebar;
