import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getShortName } from "@/utils/string.util";
// Hàm cắt ngắn mô tả nếu quá dài
const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
const ServiceItem = ({ service }) => {
    const navigate = useNavigate();
    return (_jsx(Card, { className: "w-full max-w-[300px] p-4 border rounded-xl shadow-md bg-white transition-all hover:shadow-lg hover:-translate-y-1", children: _jsxs(CardHeader, { className: "flex items-center gap-3 p-0 relative", children: [_jsxs(Avatar, { className: "w-16 h-16 border border-gray-300 shadow-sm", children: [_jsx(AvatarImage, { src: "", alt: service.name }), _jsx(AvatarFallback, { children: getShortName(service.name) })] }), _jsxs("div", { className: "flex flex-col overflow-hidden leading-tight flex-1", children: [_jsx(CardTitle, { className: "text-lg font-semibold truncate text-gray-900", children: service.name }), _jsx(CardDescription, { className: "text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text text-center", children: truncateText(service.unitPrice + " VNĐ" || "Không có mô tả", 50) })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "border-none absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 bg-transparent focus:outline-none hover:text-gray-900 transition-all", children: _jsx(MoreVertical, { size: 22 }) }), _jsxs(DropdownMenuContent, { side: "right", align: "end", sideOffset: 5, className: "w-40 border rounded-lg shadow-md bg-white", children: [_jsx(DropdownMenuItem, { onClick: () => navigate(`/admin/services/${service.id}`), className: "hover:bg-gray-100", children: "\uD83D\uDD0D Xem chi ti\u1EBFt" }), _jsx(DropdownMenuItem, { onClick: () => console.log("Update", service.id), className: "hover:bg-gray-100", children: "\u270F\uFE0F C\u1EADp nh\u1EADt" }), _jsx(DropdownMenuItem, { onClick: (e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                    }, className: "hover:bg-red-100 text-red-500", children: "\u274C X\u00F3a d\u1ECBch v\u1EE5" })] })] })] }) }));
};
export default ServiceItem;
