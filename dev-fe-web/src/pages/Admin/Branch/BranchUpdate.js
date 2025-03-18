import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CMSLayout from "@/layouts/cms-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BranchService } from "@/services/admin/branch.service";
import { toast } from "sonner";
import CopyableInput from "@/components/admin/custom/copyable-input";
const BranchUpdate = () => {
    const { branchId } = useParams(); // Lấy id từ URL
    const [branch, setBranch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // State để quản lý form
    const [id, setId] = useState("");
    const [branchCode, setBranchCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        if (!branchId)
            return;
        const fetchBranch = async () => {
            try {
                const service = new BranchService();
                const data = await service.getDetailBranch(branchId);
                const branchData = data.content[0];
                setId(branchData.id);
                setBranch(branchData);
                setBranchCode(branchData.branchCode || "");
                setName(branchData.name || "");
                setEmail(branchData.email || "");
                setPhoneNumber(branchData.phoneNumber || "");
                setAddress(branchData.address || "");
            }
            catch (err) {
                toast.error("Có lỗi xảy ra");
            }
            finally {
                setLoading(false);
            }
        };
        fetchBranch();
    }, [branchId]);
    const handleUpdate = async () => {
        if (!branchId)
            return;
        const updatedData = { name, email, phoneNumber, address };
        try {
            const service = new BranchService();
            await service.updateBranch(id, updatedData);
            toast.success("Cập nhật chi nhánh thành công!");
        }
        catch (error) {
            toast.error("Có lỗi xảy ra khi cập nhật.");
        }
    };
    if (loading)
        return (_jsx(CMSLayout, { title: "C\u1EADp nh\u1EADt chi nh\u00E1nh", children: _jsx("p", { className: "text-center", children: "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..." }) }));
    return (_jsx(CMSLayout, { title: "C\u1EADp nh\u1EADt chi nh\u00E1nh", children: _jsx("div", { className: "flex justify-center items-center flex-1", children: _jsxs(Card, { className: "w-full max-w-2xl", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "C\u1EADp Nh\u1EADt Chi Nh\u00E1nh" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("div", { children: _jsx(CopyableInput, { id: "id", label: "ID", value: branch?.id || "" }) }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "branchCode", children: "M\u00E3 Chi Nh\u00E1nh" }), _jsx(Input, { id: "branchCode", value: branchCode, onChange: (e) => setBranchCode(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "name", children: "T\u00EAn Chi Nh\u00E1nh" }), _jsx(Input, { id: "name", value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phoneNumber", children: "S\u1ED1 \u0110i\u1EC7n Tho\u1EA1i" }), _jsx(Input, { id: "phoneNumber", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "address", children: "\u0110\u1ECBa Ch\u1EC9" }), _jsx(Input, { id: "address", value: address, onChange: (e) => setAddress(e.target.value) })] }), _jsx(Button, { className: "w-full", onClick: handleUpdate, children: "C\u1EADp Nh\u1EADt" })] }) })] }) }) }));
};
export default BranchUpdate;
