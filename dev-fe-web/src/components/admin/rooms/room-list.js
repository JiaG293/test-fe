"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/admin/custom/data-table";
// import RoomItem from "@/components/admin/rooms/room-item";
// import RoomAddModal from "@/components/admin/rooms/room-add";
// import { RoomService } from "@/services/admin/room.service";
import { columns } from "@/components/admin/rooms/column";
import { RoomService } from "@/services/admin/room.service";
import RoomAddModal from "@/components/admin/rooms/room-add";
const RoomList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [rooms, setRooms] = useState([]);
    // State phân trang
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    // Fetch danh sách phòng
    const fetchRooms = async () => {
        setLoading(true);
        try {
            const roomService = new RoomService();
            const data = await roomService.getListRooms(pageIndex, 10);
            setRooms(data.content || []);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching rooms:", error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchRooms();
    }, [pageIndex]);
    // Lọc phòng theo từ khóa tìm kiếm
    const filteredRooms = rooms.filter((room) => room.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm ph\u00F2ng...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsx(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: _jsx(ToggleGroupItem, { value: "table", children: "B\u1EA3ng" }) }), _jsx(RoomAddModal, { onAddSuccess: fetchRooms })] }), viewMode === "table" ? (_jsx("div", { className: "flex-1 min-h-[80vh]", children: _jsx(DataTable, { columns: columns, data: filteredRooms, pageIndex: pageIndex, pageSize: 10, pageCount: totalPages, onPageChange: (newPage) => {
                        if (newPage >= 0 && newPage < totalPages) {
                            setPageIndex(newPage);
                        }
                    } }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" }))] }));
};
export default RoomList;
