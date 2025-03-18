import { jsx as _jsx } from "react/jsx-runtime";
import GroupUserList from '@/components/admin/group-users/group-list';
import CMSLayout from '@/layouts/cms-layout';
const GroupUser = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch nh\u00F3m ng\u01B0\u1EDDi d\u00F9ng', children: _jsx(GroupUserList, {}) }));
};
export default GroupUser;
