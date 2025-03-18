import { jsx as _jsx } from "react/jsx-runtime";
import EquipmentList from '@/components/admin/equipments/equipment-list';
import CMSLayout from '@/layouts/cms-layout';
const Equipment = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch thi\u1EBFt b\u1ECB', children: _jsx(EquipmentList, {}) }));
};
export default Equipment;
