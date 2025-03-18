import axios from "axios";
import Cookies from "js-cookie";
const API_BASE_URL = import.meta.env.VITE_BACKEND_HOST;
export class BranchService {
    async getAllBranches() {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("No authentication token found in cookies");
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/branchs/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "X-tenantId": `${import.meta.env.VITE_KEYCLOAK_REALM}`,
                },
            });
            return response.data.result;
        }
        catch (error) {
            console.error("Error fetching branches:", error);
            throw error;
        }
    }
    // Lấy danh sách chi nhánh với phân trang
    async getListBranches(size) {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("No authentication token found in cookies");
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/branchs/filters?${size}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "X-tenantId": `${import.meta.env.VITE_KEYCLOAK_REALM}`,
                },
            });
            return response.data.result;
        }
        catch (error) {
            console.error("Error fetching branches:", error);
            throw error;
        }
    }
    // Lấy danh chi tiết chi nhánh
    async getDetailBranch(branchCode) {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("No authentication token found in cookies");
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/branchs/filters?size=1`, {
                params: { branchCode },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "X-tenantId": `${import.meta.env.VITE_KEYCLOAK_REALM}`,
                },
            });
            return response.data.result;
        }
        catch (error) {
            console.error("Error fetching branches:", error);
            throw error;
        }
    }
    // Tạo chi nhánh mới
    async createBranch(branchData) {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("No authentication token found in cookies");
        }
        try {
            const response = await axios.post(`${API_BASE_URL}/branchs`, branchData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "X-tenantId": `${import.meta.env.VITE_KEYCLOAK_REALM}`,
                },
            });
            console.log("Branch created successfully");
            return response.data.result;
        }
        catch (error) {
            console.error("Error creating branch:", error);
            throw error;
        }
    }
    // Cập nhật chi nhánh
    async updateBranch(id, branchData) {
        const token = Cookies.get("token");
        if (!token) {
            throw new Error("No authentication token found in cookies");
        }
        console.log(`${API_BASE_URL}/branchs/${id}`);
        try {
            const response = await axios.patch(`${API_BASE_URL}/branchs/${id}`, branchData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "X-tenantId": `${import.meta.env.VITE_KEYCLOAK_REALM}`,
                },
            });
            console.log("Branch updated successfully");
            return response.data.result;
        }
        catch (error) {
            console.error("Error updating branch:", error);
            throw error;
        }
    }
}
