import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { UserService } from "@/services/admin/user.service"; // import UserService
import { toast } from "sonner";
const UserAddModal = ({ onAddSuccess }) => {
    const [employeeId, setEmployeeId] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userType, setUserType] = useState("employee");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const userService = new UserService();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Đảm bảo tất cả các trường hợp nhập là hợp lệ trước khi gửi yêu cầu
        if (!employeeId || !email || !firstName || !lastName || !phoneNumber || !userType) {
            alert("Please fill all fields.");
            return;
        }
        // Tạo một đối tượng người dùng từ form
        const newUser = {
            userCode: employeeId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: "password123",
            gender: "true",
            email: email,
            type: userType === "employee" ? "EMPLOYEE" : "APPROVER",
            roles: userType === "employee" ? ["USER"] : ["USER", "APPROVER"]
        };
        try {
            await userService.createUser(newUser);
            toast.success("Tạo người dùng thành công!", {
                description: _jsxs("strong", { children: ["Ng\u01B0\u1EDDi d\u00F9ng ", firstName, " ", lastName, " \u0111\u00E3 \u0111\u01B0\u1EE3c th\u00EAm."] }),
            });
            setIsDialogOpen(false);
            onAddSuccess();
        }
        catch (error) {
            console.error("Error creating user:", error);
            alert("Error creating user.");
        }
    };
    return (_jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("button", { className: "py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors", children: "Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng" }) }), _jsxs(DialogContent, { className: "p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto", children: [_jsx(DialogTitle, { className: "text-xl font-semibold mb-4", children: "T\u1EA1o ng\u01B0\u1EDDi d\u00F9ng m\u1EDBi" }), _jsx(DialogDescription, { className: "text-sm mb-6", children: "\u0110i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\u00E1c th\u00F4ng tin b\u00EAn d\u01B0\u1EDBi" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 nh\u00E2n vi\u00EAn" }), _jsx("input", { type: "text", value: employeeId, onChange: (e) => setEmployeeId(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00E3 nh\u00E2n vi\u00EAn" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp email" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "H\u1ECD" }), _jsx("input", { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp h\u1ECD" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00EAn" }), _jsx("input", { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp t\u00EAn" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" }), _jsx("input", { type: "text", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Lo\u1EA1i ng\u01B0\u1EDDi d\u00F9ng" }), _jsxs("select", { value: userType, onChange: (e) => setUserType(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "employee", children: "Nh\u00E2n Vi\u00EAn" }), _jsx("option", { value: "approver", children: "Ki\u1EC3m duy\u1EC7t vi\u00EAn" })] })] }), _jsxs("div", { className: "col-span-2 flex justify-between items-center mt-4", children: [_jsx(DialogClose, { asChild: true, children: _jsx("button", { type: "button", className: "py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors", children: "Hu\u1EF7" }) }), _jsx("button", { type: "submit", className: "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors", children: "Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng" })] })] })] })] }));
};
export default UserAddModal;
