import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DisableUserDialog from "@/components/admin/users/user-disable";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react"; // Import icon từ lucide-react
import { Link } from "react-router-dom";
export const columns = [
    {
        id: "stt",
        header: "STT",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "userCode",
        header: "Mã nhân viên",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "firstName",
        header: "Họ",
        cell: ({ row }) => row.original.firstName || "N/A",
    },
    {
        accessorKey: "lastName",
        header: "Tên",
        cell: ({ row }) => row.original.lastName || "N/A",
    },
    {
        accessorKey: "phoneNumber",
        header: "Số điện thoại",
        cell: ({ row }) => row.original.phoneNumber || "N/A",
    },
    {
        accessorKey: "userType",
        header: "Loại người dùng",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", className: "h-8 w-8 p-0 bg-transparent", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "H\u00E0nh \u0111\u1ED9ng" }), _jsx(DropdownMenuItem, { children: _jsx(Link, { to: `/admin/users/${row.original.userId}`, children: "Xem chi ti\u1EBFt" }) }), _jsx(DropdownMenuItem, { onClick: (e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }, children: "C\u1EADp nh\u1EADt" }), _jsx(DropdownMenuItem, { onClick: (e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }, children: _jsx(DisableUserDialog, { triggerText: "V\u00F4 hi\u1EC7u ho\u00E1" }) })] })] }));
        },
    },
];
