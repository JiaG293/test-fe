import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
const CopyableInput = ({ id, label, value, readOnly = false, }) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success("Đã sao chép vào clipboard!");
        }
        catch (err) {
            toast.error("Lỗi khi sao chép!");
        }
    };
    return (_jsxs("div", { children: [_jsx(Label, { htmlFor: id, children: label }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: id, value: value, readOnly: readOnly, className: "pr-12 cursor-default bg-gray-100" }), _jsx(Copy, { onClick: handleCopy, className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer", size: 18 })] })] }));
};
export default CopyableInput;
