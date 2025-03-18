import { jsx as _jsx } from "react/jsx-runtime";
import UserList from '@/components/admin/users/user-list';
import CMSLayout from '@/layouts/cms-layout';
const User = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch ng\u01B0\u1EDDi d\u00F9ng', children: _jsx(UserList, {}) }));
};
export default User;
