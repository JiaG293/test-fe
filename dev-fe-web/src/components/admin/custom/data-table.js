"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";
export function DataTable({ columns, data, pageIndex, pageSize, pageCount, onPageChange, }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        pageCount,
        state: {
            pagination: {
                pageIndex,
                pageSize,
            },
        },
        manualPagination: true, // Phân trang thủ công từ API
    });
    return (_jsxs("div", { className: "rounded-md border", children: [_jsxs(Table, { children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => (_jsx(TableHead, { className: "bg-muted text-muted-foreground font-semibold", children: header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx(TableBody, { children: table.getRowModel().rows.length ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { className: "h-12 py-0 odd:bg-background even:bg-muted", children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { className: "h-8 py-0 leading-none", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "Kh\u00F4ng c\u00F3 k\u1EBFt qu\u1EA3." }) })) })] }), _jsxs("div", { className: "flex justify-center items-center gap-2 mt-4", children: [_jsx(Button, { variant: "outline", onClick: () => onPageChange(0), disabled: pageIndex === 0, children: "<<" }), _jsx(Button, { variant: "outline", onClick: () => onPageChange(Math.max(pageIndex - 1, 0)), disabled: pageIndex === 0, children: "<" }), Array.from({ length: pageCount }, (_, i) => i)
                        .filter((i) => i === 0 ||
                        i === pageCount - 1 ||
                        (i >= pageIndex - 2 && i <= pageIndex + 2))
                        .map((i, index, arr) => (_jsxs(React.Fragment, { children: [index > 0 && i !== arr[index - 1] + 1 && _jsx("span", { className: "px-2", children: "..." }), _jsx(Button, { variant: pageIndex === i ? "default" : "outline", onClick: () => onPageChange(i), className: `${pageIndex === i
                                    ? "bg-blue-500 text-white font-bold border-blue-700"
                                    : "bg-muted text-muted-foreground hover:bg-gray-200"}`, children: i + 1 })] }, i))), _jsx(Button, { variant: "outline", onClick: () => onPageChange(Math.min(pageIndex + 1, pageCount - 1)), disabled: pageIndex >= pageCount - 1, children: ">" }), _jsx(Button, { variant: "outline", onClick: () => onPageChange(pageCount - 1), disabled: pageIndex >= pageCount - 1, children: ">>" })] })] }));
}
