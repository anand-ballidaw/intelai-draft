import { departmentRepository } from "../repository/department.repository"
import {
    Department,
    CreateDepartmentDTO,
    UpdateDepartmentDTO
} from "../types/department.types"

import { eventBusService } from "@/services/event-bus.service"

class DepartmentService {

    async listDepartments(): Promise<Department[]> {
        return departmentRepository.getDepartments()
    }

    async getDepartment(id: string): Promise<Department> {
        return departmentRepository.getDepartmentById(id)
    }

    async createDepartment(data: CreateDepartmentDTO): Promise<Department> {

        const department = await departmentRepository.createDepartment(data)

        eventBusService.publish("department.created", department)

        return department
    }

    async updateDepartment(
        id: string,
        data: UpdateDepartmentDTO
    ): Promise<Department> {

        const department = await departmentRepository.updateDepartment(id, data)

        eventBusService.publish("department.updated", department)

        return department
    }

    async deleteDepartment(id: string): Promise<void> {

        await departmentRepository.deleteDepartment(id)

        eventBusService.publish("department.deleted", { id })
    }
}

export const departmentService = new DepartmentService()