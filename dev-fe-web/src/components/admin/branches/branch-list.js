"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/admin/custom/data-table";
import { columns } from "./column";
import { BranchService } from "@/services/admin/branch.service";
import BranchAddModal from "@/components/admin/branches/branch-add";
const BranchList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10; // Số lượng chi nhánh trên mỗi trang
    const fetchBranches = async () => {
        setLoading(true);
        try {
            const branchService = new BranchService();
            const data = await branchService.getListBranches(pageIndex + 1);
            console.log(data);
            setBranches(data.content.map((branch) => ({
                branchId: branch.id,
                branchCode: branch.branchCode,
                name: branch.name,
                phoneNumber: branch.phoneNumber,
                email: branch.email,
                address: branch.address,
            })));
            setTotalPages(data.pagination.totalPages || 1);
        }
        catch (error) {
            console.error("Failed to fetch branches:", error);
        }
        finally {
            setLoading(false);
        }
    };
    const onAddSuccess = async () => {
        // Kiểm tra xem người dùng có phải là người dùng cuối cùng của trang không
        if (branches.length >= 10) {
            setPageIndex(pageIndex + 1);
        }
        else {
            await fetchBranches();
        }
    };
    useEffect(() => {
        fetchBranches();
    }, [pageIndex]);
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsx(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: _jsx(ToggleGroupItem, { value: "table", children: "B\u1EA3ng" }) }), _jsx(BranchAddModal, { onAddSuccess: onAddSuccess })] }), loading ? (_jsx("p", { children: "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..." })) : (_jsx("div", { className: "overflow-auto max-h-[80vh]", children: _jsx(DataTable, { columns: columns, data: branches, pageIndex: pageIndex, pageSize: pageSize, pageCount: totalPages, onPageChange: (newPage) => {
                        if (newPage >= 0 && newPage < totalPages) {
                            setPageIndex(newPage);
                        }
                    } }) }))] }));
};
export default BranchList;
