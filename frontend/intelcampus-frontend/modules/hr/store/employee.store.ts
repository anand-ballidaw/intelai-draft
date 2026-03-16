import { create } from "zustand"

import { Employee } from "../types/employee.types"
import { employeeService } from "../service/employee.service"

interface EmployeeState {

    employees: Employee[]
    loading: boolean

    fetchEmployees: () => Promise<void>
    createEmployee: (data: any) => Promise<void>
    deleteEmployee: (id: string) => Promise<void>
}

export const useEmployeeStore = create<EmployeeState>((set) => ({

    employees: [],
    loading: false,

    fetchEmployees: async () => {

        set({ loading: true })

        const employees = await employeeService.listEmployees()

        set({
            employees,
            loading: false
        })
    },

    createEmployee: async (data) => {

        const employee = await employeeService.createEmployee(data)

        set((state) => ({
            employees: [...state.employees, employee]
        }))
    },

    deleteEmployee: async (id) => {

        await employeeService.deleteEmployee(id)

        set((state) => ({
            employees: state.employees.filter((e) => e.id !== id)
        }))
    }

}))