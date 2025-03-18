import { jsx as _jsx } from "react/jsx-runtime";
import RoomList from '@/components/admin/rooms/room-list';
import CMSLayout from '@/layouts/cms-layout';
const Room = () => {
    return (_jsx(CMSLayout, { title: 'Danh s\u00E1ch ph\u00F2ng h\u1ECDp', children: _jsx(RoomList, {}) }));
};
export default Room;
