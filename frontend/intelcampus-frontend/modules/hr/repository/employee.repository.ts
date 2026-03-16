import { apiService } from "@/services/api.service"

import {
    Employee,
    CreateEmployeeDTO,
    UpdateEmployeeDTO
} from "../types/employee.types"

class EmployeeRepository {

    async getEmployees(): Promise<Employee[]> {
        return apiService.get("/employees")
    }

    async getEmployeeById(id: string): Promise<Employee> {
        return apiService.get(`/employees/${id}`)
    }

    async createEmployee(data: CreateEmployeeDTO): Promise<Employee> {
        return apiService.post("/employees", data)
    }

    async updateEmployee(
        id: string,
        data: UpdateEmployeeDTO
    ): Promise<Employee> {
        return apiService.put(`/employees/${id}`, data)
    }

    async deleteEmployee(id: string): Promise<void> {
        return apiService.delete(`/employees/${id}`)
    }
}

export const employeeRepository = new EmployeeRepository()