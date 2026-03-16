import { apiService } from "@/services/api.service"
import {
    Department,
    CreateDepartmentDTO,
    UpdateDepartmentDTO
} from "../types/department.types"

class DepartmentRepository {

    async getDepartments(): Promise<Department[]> {
        return apiService.get("/departments")
    }

    async getDepartmentById(id: string): Promise<Department> {
        return apiService.get(`/departments/${id}`)
    }

    async createDepartment(data: CreateDepartmentDTO): Promise<Department> {
        return apiService.post("/departments", data)
    }

    async updateDepartment(
        id: string,
        data: UpdateDepartmentDTO
    ): Promise<Department> {
        return apiService.put(`/departments/${id}`, data)
    }

    async deleteDepartment(id: string): Promise<void> {
        return apiService.delete(`/departments/${id}`)
    }
}

export const departmentRepository = new DepartmentRepository()