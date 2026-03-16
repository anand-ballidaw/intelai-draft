import { create } from "zustand"
import { Department } from "../types/department.types"
import { departmentService } from "../service/department.service"

interface DepartmentState {

    departments: Department[]
    loading: boolean

    fetchDepartments: () => Promise<void>
    createDepartment: (data: any) => Promise<void>
    deleteDepartment: (id: string) => Promise<void>
}

export const useDepartmentStore = create<DepartmentState>((set) => ({

    departments: [],
    loading: false,

    fetchDepartments: async () => {

        set({ loading: true })

        const departments = await departmentService.listDepartments()

        set({
            departments,
            loading: false
        })
    },

    createDepartment: async (data) => {

        const department = await departmentService.createDepartment(data)

        set((state) => ({
            departments: [...state.departments, department]
        }))
    },

    deleteDepartment: async (id) => {

        await departmentService.deleteDepartment(id)

        set((state) => ({
            departments: state.departments.filter((d) => d.id !== id)
        }))
    }

}))