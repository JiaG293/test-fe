import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import CMSLayout from "@/layouts/cms-layout";
import { useEffect, useState } from "react";
import { UserService } from "@/services/admin/user.service";
import { Button } from "@/components/ui/button";
import { Hash, Mail, Pencil, Phone, UserX, User, MoreHorizontal, } from "lucide-react";
import { getShortName } from "@/utils/string.util";
export default function UserDetail() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const userService = new UserService();
    const userGroups = ["Phòng nhân sự", "Dự án RoomX", "Đối tác IUH"];
    const recentBookings = [
        { id: 1, title: "Họp nhóm dự án", date: "2024-03-10" },
        { id: 2, title: "Tư vấn khách hàng", date: "2024-03-12" },
        { id: 3, title: "Tham gia hội thảo", date: "2024-03-15" },
        { id: 4, title: "Gặp gỡ đối tác", date: "2024-03-18" },
    ];
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await userService.getUserDetails(userId || "");
                setUser(response.result.content[0]);
            }
            catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchUser();
    }, [userId]);
    return (_jsx(CMSLayout, { title: "Chi ti\u1EBFt ng\u01B0\u1EDDi d\u00F9ng", children: _jsxs("div", { className: "grid grid-cols-3 gap-6 p-6", children: [_jsx("div", { className: "col-span-2", children: _jsxs(Card, { className: "w-full shadow-xl rounded-3xl overflow-hidden", children: [_jsxs(CardHeader, { className: "flex flex-col items-center bg-blue-300 text-white py-6", children: [_jsxs(Avatar, { className: "w-24 h-24 border-4 border-white", children: [_jsx(AvatarImage, { src: user?.avatar || "/placeholder-avatar.png", alt: "User Avatar" }), _jsx(AvatarFallback, { className: "bg-gray-300 text-gray-700 text-2xl", children: getShortName(user?.firstName || "UK") })] }), _jsxs(CardTitle, { className: "mt-4 text-2xl font-bold", children: [user?.firstName || "Unknown", " ", user?.lastName || "User"] }), _jsx(Badge, { className: "mt-2 px-3 py-1 bg-white text-blue-600 text-sm font-semibold rounded-full", children: user?.userType })] }), _jsxs(CardContent, { className: "p-6", children: [_jsx(Separator, { className: "my-4" }), _jsxs("div", { className: "space-y-4 text-gray-700 text-lg", children: [_jsxs("p", { className: "flex items-center", children: [_jsx(Hash, { className: "w-5 h-5 mr-3 text-red-500" }), _jsx("strong", { className: "w-36", children: "ID ng\u01B0\u1EDDi d\u00F9ng:" }), _jsx("span", { children: user?.userId })] }), _jsxs("p", { className: "flex items-center", children: [_jsx(User, { className: "w-5 h-5 mr-3 text-yellow-500" }), _jsx("strong", { className: "w-36", children: "M\u00E3 nh\u00E2n vi\u00EAn:" }), _jsx("span", { children: user?.userCode })] }), _jsxs("p", { className: "flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-3 text-blue-500" }), _jsx("strong", { className: "w-36", children: "Email:" }), _jsx("span", { children: user?.email })] }), _jsxs("p", { className: "flex items-center", children: [_jsx(Phone, { className: "w-5 h-5 mr-3 text-green-500" }), _jsx("strong", { className: "w-36", children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:" }), _jsx("span", { children: user?.phoneNumber || "Chưa có" })] })] }), _jsxs("div", { className: "flex justify-between mt-6", children: [_jsxs(Button, { variant: "outline", className: "flex items-center", children: [_jsx(Pencil, { className: "w-4 h-4 mr-2" }), " C\u1EADp nh\u1EADt"] }), _jsxs(Button, { variant: "destructive", className: "flex items-center", children: [_jsx(UserX, { className: "w-4 h-4 mr-2" }), " V\u00F4 hi\u1EC7u ho\u00E1"] })] })] })] }) }), _jsxs("div", { className: "flex flex-col space-y-6", children: [_jsxs(Card, { className: "w-full shadow-md rounded-3xl", children: [_jsx(CardHeader, { className: "bg-gray-100 p-4", children: _jsx(CardTitle, { className: "text-lg font-semibold", children: "Nh\u00F3m c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng" }) }), _jsx(CardContent, { className: "p-6 space-y-2 space-x-2 cursor-pointer", children: userGroups.map((group, index) => (_jsx(Badge, { className: "px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg", children: group }, index))) })] }), _jsxs(Card, { className: "w-full shadow-md rounded-3xl", children: [_jsx(CardHeader, { className: "bg-gray-100 p-4", children: _jsx(CardTitle, { className: "text-lg font-semibold", children: "L\u1ECBch h\u1ECDp s\u1EAFp t\u1EDBi" }) }), _jsxs(CardContent, { className: "p-6 max-h-56 overflow-auto space-y-3", children: [recentBookings.slice(0, 3).map((booking) => (_jsxs(Card, { className: "p-4 shadow-sm border border-gray-200 rounded-xl", children: [_jsx("p", { className: "font-semibold", children: booking.title }), _jsx("p", { className: "text-sm text-gray-500", children: booking.date })] }, booking.id))), recentBookings.length > 3 && (_jsxs(Button, { variant: "outline", className: "mt-4 w-full flex items-center justify-center", children: [_jsx(MoreHorizontal, { className: "w-4 h-4 mr-2" }), " Xem th\u00EAm"] }))] })] })] })] }) }));
}
