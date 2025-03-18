import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { BranchService } from "@/services/admin/branch.service"; // Import BranchService
import { toast } from "sonner";
const BranchAddModal = ({ onAddSuccess }) => {
    const [branchCode, setBranchCode] = useState("");
    const [branchName, setBranchName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const branchService = new BranchService();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!branchCode || !branchName || !email || !phoneNumber || !address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        const newBranch = {
            branchCode: branchCode,
            name: branchName,
            phoneNumber: phoneNumber,
            email: email,
            address: address,
        };
        try {
            await branchService.createBranch(newBranch);
            toast.success("Tạo chi nhánh thành công!", {
                description: _jsxs("strong", { children: ["Chi nh\u00E1nh ", branchName, " \u0111\u00E3 \u0111\u01B0\u1EE3c th\u00EAm."] }),
            });
            setIsDialogOpen(false);
            onAddSuccess();
        }
        catch (error) {
            console.error("Lỗi khi tạo chi nhánh:", error);
            alert("Lỗi khi tạo chi nhánh.");
        }
    };
    return (_jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("button", { className: "py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors", children: "Th\u00EAm chi nh\u00E1nh" }) }), _jsxs(DialogContent, { className: "p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto", children: [_jsx(DialogTitle, { className: "text-xl font-semibold mb-4", children: "T\u1EA1o chi nh\u00E1nh m\u1EDBi" }), _jsx(DialogDescription, { className: "text-sm mb-6", children: "\u0110i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\u00E1c th\u00F4ng tin b\u00EAn d\u01B0\u1EDBi" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 chi nh\u00E1nh" }), _jsx("input", { type: "text", value: branchCode, onChange: (e) => setBranchCode(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00E3 chi nh\u00E1nh" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00EAn chi nh\u00E1nh" }), _jsx("input", { type: "text", value: branchName, onChange: (e) => setBranchName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp t\u00EAn chi nh\u00E1nh" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp email" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" }), _jsx("input", { type: "text", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "\u0110\u1ECBa ch\u1EC9" }), _jsx("input", { type: "text", value: address, onChange: (e) => setAddress(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9" })] }), _jsxs("div", { className: "col-span-2 flex justify-between items-center mt-4", children: [_jsx(DialogClose, { asChild: true, children: _jsx("button", { type: "button", className: "py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors", children: "Hu\u1EF7" }) }), _jsx("button", { type: "submit", className: "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors", children: "Th\u00EAm chi nh\u00E1nh" })] })] })] })] }));
};
export default BranchAddModal;
