"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/admin/custom/data-table";
import { EquipmentService } from "@/services/admin/equipment.service";
// import EquipmentItem from "@/components/admin/equipments/equipment-item";
// import EquipmentAddModal from "@/components/admin/equipments/equipment-add";
import { columns } from "@/components/admin/equipments/column";
import EquipmentAddModal from "@/components/admin/equipments/equipment-add";
const EquipmentList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [equipments, setEquipments] = useState([]);
    // State phân trang
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    // Fetch danh sách thiết bị
    const fetchEquipments = async () => {
        setLoading(true);
        try {
            const equipmentService = new EquipmentService();
            const data = await equipmentService.getListEquipments(pageIndex, 10);
            setEquipments(data.content || []);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching equipments:", error);
        }
        setLoading(false);
    };
    // Khi thêm thiết bị thành công
    const onAddSuccess = async () => {
        if (equipments.length >= 10) {
            setPageIndex(pageIndex + 1);
        }
        else {
            await fetchEquipments();
        }
    };
    // Khi chỉnh sửa thiết bị thành công
    const onEditSuccess = async () => {
        await fetchEquipments();
    };
    useEffect(() => {
        fetchEquipments();
    }, [pageIndex]);
    // Lọc thiết bị theo từ khóa tìm kiếm
    const filteredEquipments = equipments.filter((equipment) => equipment.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm thi\u1EBFt b\u1ECB...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsxs(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: [_jsx(ToggleGroupItem, { value: "table", children: "B\u1EA3ng" }), _jsx(ToggleGroupItem, { value: "card", children: "Th\u1EBB" })] }), _jsx(EquipmentAddModal, { onAddSuccess: onAddSuccess })] }), viewMode === "table" ? (_jsx("div", { className: "flex-1 min-h-[80vh]", children: _jsx(DataTable, { columns: columns, data: filteredEquipments, pageIndex: pageIndex, pageSize: 10, pageCount: totalPages, onPageChange: (newPage) => {
                        if (newPage >= 0 && newPage < totalPages) {
                            setPageIndex(newPage);
                        }
                    } }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" }))] }));
};
export default EquipmentList;
