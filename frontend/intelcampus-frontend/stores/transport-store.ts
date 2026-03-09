import { create } from "zustand"
import { Vehicle, Route, PickupStudent } from "@/types/transport"

interface TransportState {

    vehicles: Vehicle[]
    routes: Route[]
    students: PickupStudent[]

    addVehicle: (vehicle: Vehicle) => void
    addRoute: (route: Route) => void
    addStudent: (student: PickupStudent) => void

    markPicked: (id: string) => void
}

export const useTransportStore = create<TransportState>((set) => ({

    vehicles: [],
    routes: [],
    students: [],

    addVehicle: (vehicle) =>
        set((state) => ({
            vehicles: [...state.vehicles, vehicle],
        })),

    addRoute: (route) =>
        set((state) => ({
            routes: [...state.routes, route],
        })),

    addStudent: (student) =>
        set((state) => ({
            students: [...state.students, student],
        })),

    markPicked: (id) =>
        set((state) => ({
            students: state.students.map((s) =>
                s.id === id ? { ...s, picked: true } : s
            ),
        })),

}))