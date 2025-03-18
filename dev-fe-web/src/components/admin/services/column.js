import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
export const columns = [
    {
        id: "stt",
        header: "STT",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "serviceCode",
        header: "Mã dịch vụ",
    },
    {
        accessorKey: "name",
        header: "Tên dịch vụ",
    },
    {
        accessorKey: "description",
        header: "Mô tả",
        cell: ({ row }) => row.original.description.length > 50
            ? row.original.description.substring(0, 50) + "..."
            : row.original.description,
    },
    {
        accessorKey: "unitPrice",
        header: "Giá dịch vụ",
        cell: ({ row }) => `${row.original.unitPrice.toLocaleString()} VND`,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", className: "h-8 w-8 p-0 bg-transparent", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "H\u00E0nh \u0111\u1ED9ng" }), _jsx(DropdownMenuItem, { children: _jsx(Link, { to: `/admin/services/${row.original.id}`, children: "Xem chi ti\u1EBFt" }) }), _jsx(DropdownMenuItem, { onClick: (e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    alert(`Chỉnh sửa dịch vụ: ${row.original.name}`);
                                }, children: "C\u1EADp nh\u1EADt" })] })] }));
        },
    },
];
