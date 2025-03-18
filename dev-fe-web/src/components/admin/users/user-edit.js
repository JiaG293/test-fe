import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { UserService } from "@/services/admin/user.service";
import { toast } from "sonner";
const UserEditModal = ({ user, onEditSuccess }) => {
    const [employeeId, setEmployeeId] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userType, setUserType] = useState("employee");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const userService = new UserService();
    // Cập nhật state khi user thay đổi
    useEffect(() => {
        if (user) {
            setEmployeeId(user.userCode);
            setEmail(user.email);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setPhoneNumber(user.phoneNumber);
            setUserType(user.type === "EMPLOYEE" ? "employee" : "approver");
            setIsDialogOpen(true);
        }
    }, [user]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!employeeId || !email || !firstName || !lastName || !phoneNumber || !userType) {
            toast.error("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        const updatedUser = {
            userCode: employeeId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: user?.password || "defaultpassword123",
            gender: user?.gender || "true",
            email: email,
            type: userType === "employee" ? "EMPLOYEE" : "APPROVER",
            roles: userType === "employee" ? ["USER"] : ["USER", "APPROVER"]
        };
        try {
            //   await userService.updateUser(updatedUser);
            toast.success("Cập nhật thành công!", {
                description: _jsxs("strong", { children: ["Th\u00F4ng tin c\u1EE7a ", firstName, " ", lastName, " \u0111\u00E3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt."] }),
            });
            setIsDialogOpen(false);
            onEditSuccess();
        }
        catch (error) {
            console.error("Lỗi cập nhật người dùng:", error);
            toast.error("Cập nhật thất bại.");
        }
    };
    return (_jsx(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: _jsxs(DialogContent, { className: "p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto", children: [_jsx(DialogTitle, { className: "text-xl font-semibold mb-4", children: "Ch\u1EC9nh s\u1EEDa ng\u01B0\u1EDDi d\u00F9ng" }), _jsx(DialogDescription, { className: "text-sm mb-6", children: "C\u1EADp nh\u1EADt th\u00F4ng tin ng\u01B0\u1EDDi d\u00F9ng" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 nh\u00E2n vi\u00EAn" }), _jsx("input", { type: "text", value: employeeId, onChange: (e) => setEmployeeId(e.target.value), className: "w-full p-2 bg-gray-100 border border-gray-300 rounded-md", readOnly: true })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "H\u1ECD" }), _jsx("input", { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00EAn" }), _jsx("input", { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" }), _jsx("input", { type: "text", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Lo\u1EA1i ng\u01B0\u1EDDi d\u00F9ng" }), _jsxs("select", { value: userType, onChange: (e) => setUserType(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "employee", children: "Nh\u00E2n Vi\u00EAn" }), _jsx("option", { value: "approver", children: "Ki\u1EC3m duy\u1EC7t vi\u00EAn" })] })] }), _jsxs("div", { className: "col-span-2 flex justify-between items-center mt-4", children: [_jsx(DialogClose, { asChild: true, children: _jsx("button", { type: "button", className: "py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors", children: "Hu\u1EF7" }) }), _jsx("button", { type: "submit", className: "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors", children: "L\u01B0u thay \u0111\u1ED5i" })] })] })] }) }));
};
export default UserEditModal;
