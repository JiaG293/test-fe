"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
                                    : flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx(TableBody, { children: table.getRowModel().rows.length ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { className: "h-12 py-0 odd:bg-background even:bg-muted", children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { className: "h-8 py-0 leading-none", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }), _jsxs("div", { className: "flex justify-center items-center gap-2 mt-4", children: [_jsxs(Button, { variant: "outline", onClick: () => onPageChange(0), disabled: pageIndex === 0, children: ["<<", " First"] }), _jsxs(Button, { variant: "outline", onClick: () => onPageChange(Math.max(pageIndex - 1, 0)), disabled: pageIndex === 0, children: ["<", " Prev"] }), Array.from({ length: pageCount }, (_, i) => (_jsx(Button, { variant: pageIndex === i ? "default" : "outline", onClick: () => onPageChange(i), children: i + 1 }, i))), _jsxs(Button, { variant: "outline", onClick: () => onPageChange(Math.min(pageIndex + 1, pageCount - 1)), disabled: pageIndex >= pageCount - 1, children: ["Next ", ">"] }), _jsxs(Button, { variant: "outline", onClick: () => onPageChange(pageCount - 1), disabled: pageIndex >= pageCount - 1, children: ["Last ", ">>"] })] })] }));
}
