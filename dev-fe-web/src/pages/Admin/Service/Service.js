import { jsx as _jsx } from "react/jsx-runtime";
import ServiceList from '@/components/admin/services/service-list';
import CMSLayout from '@/layouts/cms-layout';
const Service = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch d\u1ECBch v\u1EE5', children: _jsx(ServiceList, {}) }));
};
export default Service;
