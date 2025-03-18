import { jsx as _jsx } from "react/jsx-runtime";
import BranchList from '@/components/admin/branches/branch-list';
import CMSLayout from '@/layouts/cms-layout';
const Branch = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch chi nh\u00E1nh', children: _jsx(BranchList, {}) }));
};
export default Branch;
