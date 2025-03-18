import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const columns = [
    {
        id: "stt",
        header: "STT",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "branchCode",
        header: "Mã chi nhánh",
    },
    {
        accessorKey: "name",
        header: "Chi nhánh",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Số điện thoại",
    },
    {
        accessorKey: "address",
        header: "Địa chỉ",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", className: "h-8 w-8 p-0 bg-transparent", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "H\u00E0nh \u0111\u1ED9ng" }), _jsxs(DropdownMenuItem, { children: [_jsx(Link, { to: `/admin/branches/edit/${row.original.branchCode}`, children: "C\u1EADp nh\u1EADt" }), " "] })] })] }));
        },
    },
];
