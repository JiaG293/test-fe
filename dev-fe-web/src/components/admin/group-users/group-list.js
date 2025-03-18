"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import GroupUserItem from "./group-user-item"; // Component hiển thị thông tin 1 nhóm
import { DataTable } from "@/components/admin/custom/data-table";
import { columns } from "./column"; // Các cột hiển thị trong table
const groups = [
    {
        groupId: "1",
        groupName: "Nhóm A",
        details: "Chi tiết nhóm A",
        type: "nhom",
        memberCount: 5,
    },
    {
        groupId: "2",
        groupName: "Nhóm B",
        details: "Chi tiết nhóm B",
        type: "nhom",
        memberCount: 8,
    },
    {
        groupId: "3",
        groupName: "Nhóm C",
        details: "Chi tiết nhóm C",
        type: "nhom",
        memberCount: 12,
    },
    // Thêm các nhóm khác nếu cần
];
const GroupUserList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const filteredGroups = groups.filter((group) => {
        const matchesSearch = group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            group.details.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === "all" || group.type === filterType;
        return matchesSearch && matchesFilter;
    });
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm theo t\u00EAn nh\u00F3m ho\u1EB7c chi ti\u1EBFt...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsxs(Select, { value: filterType, onValueChange: setFilterType, defaultValue: "all", children: [_jsx(SelectTrigger, { className: "w-full md:w-1/4", children: _jsx(SelectValue, { placeholder: "L\u1ECDc theo lo\u1EA1i" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "T\u1EA5t c\u1EA3" }), _jsx(SelectItem, { value: "nhom", children: "Nh\u00F3m" })] })] }), _jsx(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: _jsx(ToggleGroupItem, { value: "table", children: "Table" }) })] }), viewMode === "table" ? (_jsx("div", { className: "overflow-auto max-h-[75vh]", children: _jsx(DataTable, { columns: columns, data: filteredGroups }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filteredGroups.map((group) => (
                // <GroupUserItem key={group.groupId} group={group} />
                _jsx(_Fragment, {}))) }))] }));
};
export default GroupUserList;
