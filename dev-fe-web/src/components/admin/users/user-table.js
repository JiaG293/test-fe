import { jsx as _jsx } from "react/jsx-runtime";
import { columns } from "@/components/admin/users/column";
import { DataTable } from "@/components/admin/custom/data-table";
const UserTable = ({ users, pageIndex, setPageIndex, totalPages }) => {
    const pageSize = 10;
    return (_jsx("div", { className: "overflow-auto max-h-[80vh]", children: _jsx(DataTable, { columns: columns, data: users, pageIndex: pageIndex, pageSize: pageSize, pageCount: totalPages, onPageChange: (newPage) => {
                if (newPage >= 0 && newPage < totalPages) {
                    setPageIndex(newPage);
                }
            } }) }));
};
export default UserTable;
