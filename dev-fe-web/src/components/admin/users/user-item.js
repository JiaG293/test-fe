import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { getShortName } from "@/utils/string.util";
import { useNavigate } from "react-router-dom";
import DisableUserDialog from "@/components/admin/users/user-disable";
const UserItem = ({ user }) => {
    const navigate = useNavigate();
    return (_jsx(Card, { className: "w-full max-w-[280px] p-3 border rounded-lg shadow-sm relative", children: _jsxs(CardHeader, { className: "flex items-center gap-3 p-0", children: [_jsxs(Avatar, { className: "w-14 h-14 border border-gray-300", children: [_jsx(AvatarImage, { src: "", alt: user.lastName + "" }), _jsx(AvatarFallback, { children: getShortName(user.lastName + "") })] }), _jsxs("div", { className: "flex flex-col overflow-hidden leading-tight flex-1", children: [_jsxs(CardTitle, { className: "text-base font-semibold truncate", children: [user.firstName, " ", user.lastName] }), _jsx(CardDescription, { className: "text-sm text-gray-600 truncate", children: user.email || "No Email" })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "border-none absolute right-2 top-1/2 -translate-y-1/2 p-2 text-foreground bg-transparent focus:outline-none", children: _jsx(MoreVertical, { size: 20 }) }), _jsxs(DropdownMenuContent, { side: "right", align: "end", sideOffset: 5, className: "w-36", children: [_jsx(DropdownMenuItem, { onClick: () => navigate(`/admin/users/${user.userId}`), children: "Xem chi ti\u1EBFt" }), _jsx(DropdownMenuItem, { onClick: () => console.log("Update", user.userId), children: "C\u1EADp nh\u1EADt" }), _jsx(DropdownMenuItem, { onClick: (e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                    }, children: _jsx(DisableUserDialog, { triggerText: "V\u00F4 hi\u1EC7u ho\u00E1" }) }), "          "] })] })] }) }));
};
export default UserItem;
