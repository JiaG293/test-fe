import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CMSLayout from "@/layouts/cms-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Calendar } from "lucide-react";
const bookingData = [
    { name: "Jan", bookings: 120 },
    { name: "Feb", bookings: 150 },
    { name: "Mar", bookings: 180 },
    { name: "Apr", bookings: 160 },
    { name: "May", bookings: 200 },
    { name: "Jun", bookings: 250 },
];
const roomTypeUsage = [
    { name: "Phòng họp nhỏ", usage: 100 },
    { name: "Phòng họp trung bình", usage: 150 },
    { name: "Phòng họp lớn", usage: 200 },
];
const topUsers = [
    { id: 1, name: "Nguyễn Văn A", totalBookings: 15 },
    { id: 2, name: "Trần Thị B", totalBookings: 12 },
    { id: 3, name: "Lê Minh C", totalBookings: 10 },
];
const Statistics = () => {
    return (_jsx(CMSLayout, { title: "Th\u1ED1ng k\u00EA", children: _jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-6 h-6 text-green-500" }), "T\u1ED5ng l\u01B0\u1EE3t \u0111\u1EB7t ph\u00F2ng"] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-3xl font-bold text-green-600", children: "960" }), _jsx("p", { className: "text-sm text-gray-500", children: "+15% so v\u1EDBi th\u00E1ng tr\u01B0\u1EDBc" })] })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-6 h-6 text-blue-500" }), "L\u01B0\u1EE3t \u0111\u1EB7t trong th\u00E1ng"] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-3xl font-bold text-blue-600", children: "250" }), _jsx("p", { className: "text-sm text-gray-500", children: "+10% so v\u1EDBi th\u00E1ng tr\u01B0\u1EDBc" })] })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-6 h-6 text-purple-500" }), "Ng\u01B0\u1EDDi d\u00F9ng th\u01B0\u1EDDng xuy\u00EAn"] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-3xl font-bold text-purple-600", children: "75" }), _jsx("p", { className: "text-sm text-gray-500", children: "30% t\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi d\u00F9ng" })] })] })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "L\u01B0\u1EE3t \u0111\u1EB7t ph\u00F2ng theo th\u00E1ng" }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: bookingData, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "bookings", fill: "#10b981" })] }) }) })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "T\u1EA7n su\u1EA5t s\u1EED d\u1EE5ng theo lo\u1EA1i ph\u00F2ng" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Lo\u1EA1i ph\u00F2ng" }), _jsx(TableHead, { children: "S\u1ED1 l\u01B0\u1EE3t \u0111\u1EB7t" })] }) }), _jsx(TableBody, { children: roomTypeUsage.map((room, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: room.name }), _jsx(TableCell, { children: room.usage })] }, index))) })] }) })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Ng\u01B0\u1EDDi d\u00F9ng \u0111\u1EB7t ph\u00F2ng nhi\u1EC1u nh\u1EA5t" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "ID" }), _jsx(TableHead, { children: "T\u00EAn" }), _jsx(TableHead, { children: "S\u1ED1 l\u01B0\u1EE3t \u0111\u1EB7t" })] }) }), _jsx(TableBody, { children: topUsers.map((user) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: user.id }), _jsx(TableCell, { children: user.name }), _jsx(TableCell, { children: user.totalBookings })] }, user.id))) })] }) })] })] }) }));
};
export default Statistics;
