import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Users, Calendar, CheckCircle, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import CMSLayout from "@/layouts/cms-layout";
const stats = [
    { title: "Số phòng", value: 15, icon: _jsx(Calendar, { className: "w-6 h-6" }) },
    { title: "Lượt đặt hôm nay", value: 8, icon: _jsx(CheckCircle, { className: "w-6 h-6" }) },
    { title: "Người dùng", value: 200, icon: _jsx(Users, { className: "w-6 h-6" }) },
    { title: "Tổng doanh thu", value: "$12,500", icon: _jsx(DollarSign, { className: "w-6 h-6" }) },
];
const bookings = [
    { id: 1, room: "Phòng hội nghị A", user: "John Doe", time: "10:00 - 11:00", status: "Đã xác nhận" },
    { id: 2, room: "Phòng họp B", user: "Jane Smith", time: "14:00 - 15:00", status: "Chờ xử lý" },
    { id: 3, room: "Phòng họp C", user: "Mike Johnson", time: "16:00 - 17:00", status: "Đã hủy" },
];
const bookingChartData = [
    { name: "Tháng 1", bookings: 30 },
    { name: "Tháng 2", bookings: 45 },
    { name: "Tháng 3", bookings: 60 },
    { name: "Tháng 4", bookings: 50 },
    { name: "Tháng 5", bookings: 70 },
    { name: "Tháng 6", bookings: 90 },
];
const revenueChartData = [
    { name: "Tháng 1", revenue: 3000 },
    { name: "Tháng 2", revenue: 4500 },
    { name: "Tháng 3", revenue: 6000 },
    { name: "Tháng 4", revenue: 5000 },
    { name: "Tháng 5", revenue: 7000 },
    { name: "Tháng 6", revenue: 9000 },
];
const Dashboard = () => {
    return (_jsx(CMSLayout, { title: 'Trang ch\u1EE7', children: _jsxs("div", { className: "p-6 space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: stats.map((stat, index) => (_jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [stat.icon, stat.title] }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-3xl font-bold text-blue-600", children: stat.value }) })] }, index))) }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "\u0110\u1EB7t ph\u00F2ng g\u1EA7n \u0111\u00E2y" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "ID" }), _jsx(TableHead, { children: "Ph\u00F2ng" }), _jsx(TableHead, { children: "Ng\u01B0\u1EDDi d\u00F9ng" }), _jsx(TableHead, { children: "Th\u1EDDi gian" }), _jsx(TableHead, { children: "Tr\u1EA1ng th\u00E1i" }), _jsx(TableHead, { children: "H\u00E0nh \u0111\u1ED9ng" })] }) }), _jsx(TableBody, { children: bookings.map(booking => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: booking.id }), _jsx(TableCell, { children: booking.room }), _jsx(TableCell, { children: booking.user }), _jsx(TableCell, { children: booking.time }), _jsx(TableCell, { children: booking.status }), _jsx(TableCell, { children: _jsx(Button, { size: "sm", variant: "outline", children: "Qu\u1EA3n l\u00FD" }) })] }, booking.id))) })] }) })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Th\u1ED1ng k\u00EA \u0111\u1EB7t ph\u00F2ng" }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: bookingChartData, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "bookings", fill: "#3b82f6" })] }) }) })] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Th\u1ED1ng k\u00EA doanh thu" }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: revenueChartData, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "revenue", fill: "#10b981" })] }) }) })] })] }) }));
};
export default Dashboard;
