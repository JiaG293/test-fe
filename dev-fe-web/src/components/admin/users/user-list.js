"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import UserItem from "./user-item";
import UserAddModal from "./user-add";
import { UserService } from "@/services/admin/user.service";
import { columns } from "@/components/admin/users/column";
import { DataTable } from "@/components/admin/custom/data-table";
const UserList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    // Thêm state để quản lý phân trang
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    // Hàm fetch dữ liệu người dùng
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const userService = new UserService();
            const data = await userService.getListUsers(pageIndex, 10);
            console.log(data);
            setUsers(data.content || []);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching users:", error);
        }
        setLoading(false);
    };
    // Hàm gọi khi thêm người dùng thành công
    const onAddSuccess = async () => {
        // Kiểm tra xem người dùng có phải là người dùng cuối cùng của trang không
        if (users.length >= 10) {
            setPageIndex(pageIndex + 1);
        }
        else {
            await fetchUsers();
        }
    };
    // Hàm gọi khi chỉnh sửa người dùng thành công
    const onEditSuccess = async () => {
        await fetchUsers();
    };
    useEffect(() => {
        fetchUsers();
    }, [pageIndex]);
    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.userCode.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === "all" || user.userType === filterType;
        return matchesSearch && matchesFilter;
    });
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm theo t\u00EAn, email, m\u00E3 nh\u00E2n vi\u00EAn...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsxs(Select, { value: filterType, onValueChange: setFilterType, defaultValue: "all", children: [_jsx(SelectTrigger, { className: "w-full md:w-1/4", children: _jsx(SelectValue, { placeholder: "Filter by role" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "T\u1EA5t c\u1EA3" }), _jsx(SelectItem, { value: "nhan_vien", children: "Nh\u00E2n Vi\u00EAn" }), _jsx(SelectItem, { value: "apporver", children: "Ki\u1EC3m duy\u1EC7t vi\u00EAn" })] })] }), _jsxs(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: [_jsx(ToggleGroupItem, { value: "table", children: "B\u1EA3ng" }), _jsx(ToggleGroupItem, { value: "card", children: "Th\u1EBB" })] }), _jsx(UserAddModal, { onAddSuccess: onAddSuccess })] }), viewMode === "table" ? (_jsx("div", { className: "flex-1 min-h-[80vh] ", children: _jsx(DataTable, { columns: columns, data: filteredUsers, pageIndex: pageIndex, pageSize: 10, pageCount: totalPages, onPageChange: (newPage) => {
                        if (newPage >= 0 && newPage < totalPages) {
                            setPageIndex(newPage);
                        }
                    } }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4", children: filteredUsers.map((user) => (_jsx(UserItem, { user: user }, user.userId))) }))] }));
};
export default UserList;
