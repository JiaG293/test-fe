"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export const columns = [
    {
        accessorKey: "groupId",
        header: "Group ID",
    },
    {
        accessorKey: "groupName",
        header: "Group Name",
        cell: ({ row }) => (_jsx(Link, { to: `/users/groups?groupId=${row.original.groupId}`, className: "text-blue-600 hover:underline", children: row.original.groupName })),
    },
    {
        accessorKey: "details",
        header: "Details",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "memberCount",
        header: "Member Count",
    },
];
