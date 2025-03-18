import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, } from "@/components/ui/dialog";
import { RoomService } from "@/services/admin/room.service";
import { BranchService } from "@/services/admin/branch.service";
import { toast } from "sonner";
const RoomAddModal = ({ onAddSuccess }) => {
    const [roomCode, setRoomCode] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [roomClassId, setRoomClassId] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("AVAILABLE");
    const [branches, setBranches] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [buildingId, setBuildingId] = useState("");
    const [floors, setFloors] = useState([]);
    const [floorId, setFloorId] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const roomService = new RoomService();
    const branchService = new BranchService();
    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const branchList = await branchService.getAllBranches();
                setBranches(branchList);
            }
            catch (error) {
                console.error("Lỗi khi lấy danh sách chi nhánh:", error);
                toast.error("Không thể tải danh sách chi nhánh.");
            }
        };
        fetchBranches();
    }, []);
    // Gọi API lấy danh sách tòa nhà khi chọn chi nhánh
    useEffect(() => {
        const fetchBuildings = async () => {
            if (!placeId) {
                setBuildings([]);
                setBuildingId("");
                return;
            }
            try {
                const response = await roomService.getBuildingByBranch(placeId);
                console.log("API response:", response);
                if (Array.isArray(response)) {
                    setBuildings(response.map((name, index) => ({ id: String(index), name })));
                }
                else {
                    console.error("Dữ liệu không đúng định dạng mong đợi:", response);
                    setBuildings([]);
                }
            }
            catch (error) {
                console.error("Lỗi khi lấy danh sách tòa nhà:", error);
                toast.error("Không thể tải danh sách tòa nhà.");
            }
        };
        fetchBuildings();
    }, [placeId]);
    useEffect(() => {
        const fetchFloors = async () => {
            if (!placeId || !buildingId) {
                setFloors([]);
                setFloorId("");
                return;
            }
            try {
                const buildingName = buildings.find(b => b.id === buildingId)?.name; // Lấy name thay vì id
                if (!buildingName) {
                    console.error("Không tìm thấy tên tòa nhà phù hợp.");
                    return;
                }
                const response = await roomService.getFloorByBranchAndBuilding(placeId, buildingName); // Gửi name thay vì id
                if (Array.isArray(response)) {
                    setFloors(response.map((floor) => ({ id: floor, name: `Tầng ${floor}` })));
                }
                else {
                    console.error("Dữ liệu không đúng định dạng mong đợi:", response);
                    setFloors([]);
                }
            }
            catch (error) {
                console.error("Lỗi khi lấy danh sách tầng:", error);
                toast.error("Không thể tải danh sách tầng.");
            }
        };
        fetchFloors();
    }, [placeId, buildingId]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!roomCode || !placeId || !roomClassId || !description || !status) {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        const newRoom = {
            roomCode,
            placeId,
            roomClassId,
            description,
            status,
            buildingId, // Thêm buildingId vào dữ liệu gửi đi
        };
        try {
            await roomService.createRoom(newRoom);
            toast.success("Phòng đã được thêm thành công!", {
                description: _jsxs("strong", { children: [roomCode, " \u0111\u00E3 \u0111\u01B0\u1EE3c t\u1EA1o."] }),
            });
            setIsDialogOpen(false);
            setRoomCode("");
            setPlaceId("");
            setRoomClassId("");
            setDescription("");
            setStatus("AVAILABLE");
            setBuildingId("");
            onAddSuccess();
        }
        catch (error) {
            console.error("Lỗi khi thêm phòng:", error);
            toast.error("Đã có lỗi xảy ra khi thêm phòng.");
        }
    };
    return (_jsxs(Dialog, { open: isDialogOpen, onOpenChange: setIsDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("button", { className: "py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors", children: "Th\u00EAm ph\u00F2ng" }) }), _jsxs(DialogContent, { className: "p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto", children: [_jsx(DialogTitle, { className: "text-xl font-semibold mb-4", children: "Th\u00EAm ph\u00F2ng m\u1EDBi" }), _jsx(DialogDescription, { className: "text-sm mb-6", children: "Nh\u1EADp th\u00F4ng tin chi ti\u1EBFt c\u1EE7a ph\u00F2ng" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 ph\u00F2ng" }), _jsx("input", { type: "text", value: roomCode, onChange: (e) => setRoomCode(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00E3 ph\u00F2ng" })] }), _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Chi nh\u00E1nh" }), _jsxs("select", { value: placeId, onChange: (e) => setPlaceId(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "", children: "Ch\u1ECDn chi nh\u00E1nh" }), branches.map((branch) => (_jsx("option", { value: branch.id, children: branch.name }, branch.id)))] })] }), buildings.length > 0 && (_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00F2a nh\u00E0" }), _jsxs("select", { value: buildingId, onChange: (e) => setBuildingId(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "", children: "Ch\u1ECDn t\u00F2a nh\u00E0" }), buildings.map((building) => (_jsx("option", { value: building.id, children: building.name }, building.id)))] })] })), floors.length > 0 && (_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u1EA7ng" }), _jsxs("select", { value: floorId, onChange: (e) => setFloorId(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "", children: "Ch\u1ECDn t\u1EA7ng" }), floors.map((floor) => (_jsx("option", { value: floor.id, children: floor.name }, floor.id)))] })] })), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00E3 lo\u1EA1i ph\u00F2ng" }), _jsx("input", { type: "text", value: roomClassId, onChange: (e) => setRoomClassId(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00E3 lo\u1EA1i ph\u00F2ng" })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "M\u00F4 t\u1EA3" }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", placeholder: "Nh\u1EADp m\u00F4 t\u1EA3", rows: 3 })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Tr\u1EA1ng th\u00E1i" }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full p-2 bg-transparent border border-gray-300 rounded-md", children: [_jsx("option", { value: "AVAILABLE", children: "C\u00F3 s\u1EB5n" }), _jsx("option", { value: "BOOKED", children: "\u0110\u00E3 \u0111\u1EB7t" }), _jsx("option", { value: "UNDER_MAINTENANCE", children: "\u0110ang b\u1EA3o tr\u00EC" })] })] }), _jsxs("div", { className: "col-span-2 flex justify-between items-center mt-4", children: [_jsx(DialogClose, { asChild: true, children: _jsx("button", { type: "button", className: "py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors", children: "Hu\u1EF7" }) }), _jsx("button", { type: "submit", className: "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors", children: "Th\u00EAm ph\u00F2ng" })] })] })] })] }));
};
export default RoomAddModal;
