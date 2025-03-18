import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/DisableUserDialog.tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, } from "@/components/ui/dialog"; // Import Dialog components
const DisableBranchDialog = ({ triggerText }) => {
    return (_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("span", { className: "text-red-500 cursor-pointer", children: triggerText }) }), _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "D\u1EEBng ho\u1EA1t \u0111\u1ED9ng chi nh\u00E1nh" }), _jsx(DialogDescription, { children: "B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n v\u00F4 hi\u1EC7u ho\u00E1 chi nh\u00E1nh d\u00F9ng n\u00E0y kh\u00F4ng?" }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "H\u1EE7y" }), _jsx(Button, { variant: "destructive", children: "V\u00F4 hi\u1EC7u ho\u00E1" })] })] })] }));
};
export default DisableBranchDialog;
