"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@/components/ui/sidebar";
export function TeamSwitcher({ teams, }) {
    const { isMobile } = useSidebar();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);
    return (_jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "bg-[var(--navitem-bg)] hover:bg-[var(--navitem-bg-hover)] shadow-md text-[var(--navitem-text)] focus:outline-none border-none focus:border-none data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ", children: [_jsx("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: _jsx(activeTeam.logo, { className: "size-4" }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: activeTeam.name }), _jsx("span", { className: "truncate text-xs", children: activeTeam.plan })] }), _jsx(ChevronsUpDown, { className: "ml-auto" })] }) }), _jsxs(DropdownMenuContent, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", align: "start", side: isMobile ? "bottom" : "right", sideOffset: 4, children: [_jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Teams" }), teams.map((team, index) => (_jsxs(DropdownMenuItem, { onClick: () => setActiveTeam(team), className: "gap-2 p-2", children: [_jsx("div", { className: "flex size-6 items-center justify-center rounded-sm border", children: _jsx(team.logo, { className: "size-4 shrink-0" }) }), team.name, _jsxs(DropdownMenuShortcut, { children: ["\u2318", index + 1] })] }, team.name)))] })] }) }) }));
}
