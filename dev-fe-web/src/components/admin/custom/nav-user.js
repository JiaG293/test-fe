"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BadgeCheck, ChevronsUpDown, LogOut, Moon, Sun, Globe, User, } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthProvider";
import { useCallback } from "react";
import { ThemeToggle } from "@/components/admin/custom/theme-toggle";
import { LanguageSelect } from "@/components/admin/custom/select-language";
import { getShortName } from "@/utils/string.util";
export function NavUser({ user, }) {
    const { isMobile } = useSidebar();
    const { logout, getUserInfo } = useAuth();
    const handleLogout = useCallback(() => {
        console.log("Tự chạy logout");
        logout();
    }, [logout]);
    console.log(getUserInfo());
    return (_jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "bg-[var(--navitem-bg)] hover:bg-[var(--navitem-bg-hover)] text-[var(--navitem-text)] shadow-md ring-0 border-none focus:outline-none hover:brightness-110", children: [_jsx(Avatar, { className: "h-8 w-8 rounded-lg bg-[var(--navitem-bg)]", children: _jsx(AvatarFallback, { className: "rounded-lg ", children: getShortName(user.name) || "AD" }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: user.name }), _jsx("span", { className: "truncate text-xs", children: user.email })] }), _jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), _jsxs(DropdownMenuContent, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: isMobile ? "bottom" : "right", align: "end", sideOffset: 4, children: [_jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: _jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [_jsx(Avatar, { className: "h-8 w-8 rounded-lg", children: _jsx(AvatarFallback, { className: "rounded-lg", children: getShortName(user.name) || "AD" }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: user.name }), _jsx("span", { className: "truncate text-xs", children: user.email })] })] }) }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuGroup, { children: [_jsxs(DropdownMenuItem, { className: "h-10", children: [_jsx(BadgeCheck, {}), "T\u00E0i kho\u1EA3n"] }), _jsxs(DropdownMenuItem, { className: "h-10", children: [_jsx(User, {}), "H\u1ED3 s\u01A1"] })] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuGroup, { children: [_jsxs(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), className: "flex items-center h-10", children: [_jsx(Globe, {}), _jsx(LanguageSelect, { position: "right" })] }), _jsxs(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), className: "flex items-center h-10", children: [localStorage.getItem("theme") === "dark" ? (_jsx(Moon, { className: "w-5 h-5" })) : (_jsx(Sun, { className: "w-5 h-5" })), _jsx(ThemeToggle, { variant: "switch" })] })] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: handleLogout, style: { color: "hsl(0, 85%, 50%)", fontWeight: "500" }, children: [_jsx(LogOut, {}), _jsx("span", { children: "\u0110\u0103ng xu\u1EA5t" })] })] })] }) }) }));
}
