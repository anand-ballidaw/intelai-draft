import { create } from "zustand"
import { Employee, LeaveRequest } from "@/types/hr"

interface HRState {

    employees: Employee[]

    leaves: LeaveRequest[]

    addEmployee: (e: Employee) => void

    requestLeave: (l: LeaveRequest) => void

    approveLeave: (id: string) => void

    rejectLeave: (id: string) => void

}

export const useHRStore = create<HRState>((set) => ({

    employees: [],
    leaves: [],

    addEmployee: (e) =>
        set((state) => ({
            employees: [...state.employees, e]
        })),

    requestLeave: (l) =>
        set((state) => ({
            leaves: [l, ...state.leaves]
        })),

    approveLeave: (id) =>
        set((state) => ({
            leaves: state.leaves.map((l) =>
                l.id === id ? { ...l, status: "approved" } : l
            )
        })),

    rejectLeave: (id) =>
        set((state) => ({
            leaves: state.leaves.map((l) =>
                l.id === id ? { ...l, status: "rejected" } : l
            )
        }))

}))