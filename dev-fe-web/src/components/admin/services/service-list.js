"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
// import ServiceItem from "./service-item";
// import ServiceAddModal from "./service-add";
// import { ServiceService } from "@/services/admin/service.service";
import { columns } from "@/components/admin/services/column";
import { DataTable } from "@/components/admin/custom/data-table";
import { ServiceService } from "@/services/admin/service.service";
import ServiceItem from "@/components/admin/services/service-item";
import ServiceAddModal from "@/components/admin/services/service-add";
const ServiceList = () => {
    const [viewMode, setViewMode] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    // State phân trang
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    // Fetch danh sách dịch vụ
    const fetchServices = async () => {
        setLoading(true);
        try {
            const serviceService = new ServiceService();
            const data = await serviceService.getListServices(pageIndex, 10);
            setServices(data.content || []);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching services:", error);
        }
        setLoading(false);
    };
    // Khi thêm dịch vụ thành công
    const onAddSuccess = async () => {
        if (services.length >= 10) {
            setPageIndex(pageIndex + 1);
        }
        else {
            await fetchServices();
        }
    };
    // Khi chỉnh sửa dịch vụ thành công
    const onEditSuccess = async () => {
        await fetchServices();
    };
    useEffect(() => {
        fetchServices();
    }, [pageIndex]);
    // Lọc dịch vụ theo từ khóa tìm kiếm
    const filteredServices = services.filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "mb-4 flex flex-col md:flex-row gap-4 items-center", children: [_jsx(Input, { placeholder: "T\u00ECm ki\u1EBFm d\u1ECBch v\u1EE5...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full md:w-1/3" }), _jsxs(ToggleGroup, { type: "single", value: viewMode, onValueChange: (value) => value && setViewMode(value), children: [_jsx(ToggleGroupItem, { value: "table", children: "B\u1EA3ng" }), _jsx(ToggleGroupItem, { value: "card", children: "Th\u1EBB" })] }), _jsx(ServiceAddModal, { onAddSuccess: onAddSuccess })] }), viewMode === "table" ? (_jsx("div", { className: "flex-1 min-h-[80vh]", children: _jsx(DataTable, { columns: columns, data: filteredServices, pageIndex: pageIndex, pageSize: 10, pageCount: totalPages, onPageChange: (newPage) => {
                        if (newPage >= 0 && newPage < totalPages) {
                            setPageIndex(newPage);
                        }
                    } }) })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4", children: filteredServices.map((service) => (_jsx(ServiceItem, { service: service }, service.id))) }))] }));
};
export default ServiceList;
