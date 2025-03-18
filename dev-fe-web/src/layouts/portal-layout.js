"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppSidebar } from "@/components/app/custom/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthProvider";
import { Bell, User } from "lucide-react";
const CustomHeader = () => {
    const { getUserInfo } = useAuth();
    return (_jsxs("header", { className: "fixed top-0 left-0 right-0 h-16 bg-white bg-opacity-80 backdrop-blur-lg shadow-md flex items-center justify-between px-6 z-10 border-b border-green-300 font-poppins", children: [_jsx("h1", { className: "text-4xl font-extrabold text-gray-600 font-poppins", children: "RoomX" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("button", { className: "bg-transparent relative p-2 rounded-full hover:bg-gray-100", children: [_jsx(Bell, { size: 24 }), _jsx("span", { className: "absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full" })] }), _jsxs("div", { className: "flex items-center space-x-2 cursor-pointer", children: [_jsx(User, { size: 24 }), _jsx("span", { className: "text-sm font-medium text-green-800", children: getUserInfo()?.email })] })] })] }));
};
const PortalLayout = ({ children }) => {
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs(SidebarInset, { children: [_jsx(CustomHeader, {}), _jsx("div", { className: " mt-16 flex flex-1 flex-col gap-4 p-4 overflow-y-auto h-[calc(100vh-4rem)]", children: children })] })] }));
};
export default PortalLayout;
