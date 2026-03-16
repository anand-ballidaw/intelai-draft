import { employeeRepository } from "../repository/employee.repository"

import {
    Employee,
    CreateEmployeeDTO,
    UpdateEmployeeDTO
} from "../types/employee.types"

import { eventBusService } from "@/services/event-bus.service"

class EmployeeService {

    async listEmployees(): Promise<Employee[]> {
        return employeeRepository.getEmployees()
    }

    async getEmployee(id: string): Promise<Employee> {
        return employeeRepository.getEmployeeById(id)
    }

    async createEmployee(data: CreateEmployeeDTO): Promise<Employee> {

        const employee = await employeeRepository.createEmployee(data)

        eventBusService.publish("employee.created", employee)

        return employee
    }

    async updateEmployee(
        id: string,
        data: UpdateEmployeeDTO
    ): Promise<Employee> {

        const employee = await employeeRepository.updateEmployee(id, data)

        eventBusService.publish("employee.updated", employee)

        return employee
    }

    async deleteEmployee(id: string): Promise<void> {

        await employeeRepository.deleteEmployee(id)

        eventBusService.publish("employee.deleted", { id })
    }
}

export const employeeService = new EmployeeService()