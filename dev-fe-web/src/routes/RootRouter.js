import { jsx as _jsx } from "react/jsx-runtime";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Notfound from "@/pages/Error/Notfound";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRouter";
import Dashboard from "@/pages/Admin/Dashboard";
import Login from "@/pages/Auth/Login";
import User from "@/pages/Admin/User";
import Meeting from "@/pages/Admin/Meeting";
import Branch from "@/pages/Admin/Branch/Branch";
import GroupUser from "@/pages/Admin/GroupUser";
import MeetingApproval from "@/pages/Admin/MeetingApproval";
import Statistics from "@/pages/Admin/Statistics";
import Home from "@/pages/App/Home";
import UserDetail from "@/pages/Admin/UserDetail";
import BranchUpdate from "@/pages/Admin/Branch/BranchUpdate";
import Service from "@/pages/Admin/Service/Service";
import Equipment from "@/pages/Admin/Equipment/Equipment";
import Room from "@/pages/Admin/Room/Room";
export const RootRouter = createBrowserRouter([
    {
        element: _jsx(ProtectedRoute, {}),
        children: [
            {
                path: "/admin/home",
                element: _jsx(Dashboard, {}),
            },
            {
                path: "/admin/statistics",
                element: _jsx(Statistics, {}),
            },
            {
                path: "/admin/users",
                element: _jsx(User, {}),
            },
            {
                path: "/admin/users/:userId",
                element: _jsx(UserDetail, {}),
            },
            {
                path: "/admin/meetings",
                element: _jsx(Meeting, {}),
            },
            {
                path: "/admin/meetings/room-approvals",
                element: _jsx(MeetingApproval, {}),
            },
            {
                path: "/admin/branches",
                element: _jsx(Branch, {}),
            },
            {
                path: "/admin/branches/edit/:branchId",
                element: _jsx(BranchUpdate, {}),
            },
            {
                path: "/admin/users/groups",
                element: _jsx(GroupUser, {}),
            },
            {
                path: "/admin/services",
                element: _jsx(Service, {}),
            },
            {
                path: "/admin/equipments",
                element: _jsx(Equipment, {}),
            },
            {
                path: "/admin/rooms",
                element: _jsx(Room, {})
            }
        ],
    },
    {
        path: "/login",
        element: _jsx(Login, {}),
    },
    {
        path: "/forgot-password",
        element: _jsx(ForgotPassword, {}), //
    },
    {
        path: "*",
        element: _jsx(Notfound, {}),
    },
    {
        path: "/portal/home",
        element: _jsx(Home, {})
    }
]);
