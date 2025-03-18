import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ServiceService } from "@/services/admin/service.service"; // Import ServiceService
import { toast } from "sonner";
const ServiceAddModal = ({ onAddSuccess }) => {
    const [serviceCode, setServiceCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const serviceService = new ServiceService();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!serviceCode || !name || !description || !unitPrice) {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        const newService = {
            serviceCode,
            name,
            description,
            note,
            unitPrice: parseFloat(unitPrice),
        };
        try {
            await serviceService.createService(newService);
            toast.success("Dịch vụ đã được thêm thành công!", {
                description: _jsxs("strong", { children: [name, " \u0111\u00E3 \u0111\u01B0\u1EE3c t\u1EA1o."] }),
            });
            setIsDialogOpen(false);
            setServiceCode("");
            setName("");
            setDescription("");
            setNote("");
            setUnitPrice("");
            onAddSuccess();
        }
        catch (error) {
            console.error("Lỗi khi thêm dịch vụ:", error);
            toast.error("Đã có lỗi xảy ra khi thêm dịch vụ.");
        }
    };
    return (_jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("button", { className: "py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors", children: "Th\u00EAm d\u1ECBch v\u1EE5" }) }), _jsxs(DialogContent, { className: "p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto", children: [_jsx(DialogTitle, { className: "text-xl font-semibold mb-4", children: "Th\u00EAm d\u1ECBch v\u1EE5 m\u1EDBi" }), _jsx(DialogDescription, { className: "text-sm mb-6", children: "Nh\u1EADp th\u00F4ng tin chi ti\u1EBFt c\u1EE7a d\u1ECBch v\u1EE5" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 d\u1ECBch v\u1EE5" }), _jsx("input", { type: "text", value: serviceCode, onChange: (e) => setServiceCode(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00E3 d\u1ECBch v\u1EE5" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00EAn d\u1ECBch v\u1EE5" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp t\u00EAn d\u1ECBch v\u1EE5" })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00F4 t\u1EA3" }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00F4 t\u1EA3", rows: 3 })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Ghi ch\u00FA" }), _jsx("textarea", { value: note, onChange: (e) => setNote(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp ghi ch\u00FA (n\u1EBFu c\u00F3)", rows: 2 })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "\u0110\u01A1n gi\u00E1 (VN\u0110)" }), _jsx("input", { type: "number", value: unitPrice, onChange: (e) => setUnitPrice(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp \u0111\u01A1n gi\u00E1" })] }), _jsxs("div", { className: "col-span-2 flex justify-between items-center mt-4", children: [_jsx(DialogClose, { asChild: true, children: _jsx("button", { type: "button", className: "py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors", children: "Hu\u1EF7" }) }), _jsx("button", { type: "submit", className: "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors", children: "Th\u00EAm d\u1ECBch v\u1EE5" })] })] })] })] }));
};
export default ServiceAddModal;
