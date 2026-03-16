import { create } from "zustand"
import { Vehicle } from "./transport.types"
import { getVehicles, addVehicle } from "./transport.service"

interface TransportState {

    vehicles: Vehicle[]

    loadVehicles: () => Promise<void>

    createVehicle: (vehicle: Vehicle) => Promise<void>

}

export const useTransportStore = create<TransportState>((set) => ({

    vehicles: [],

    loadVehicles: async () => {

        const data = await getVehicles()

        set({ vehicles: data })

    },

    createVehicle: async (vehicle) => {

        const newVehicle = await addVehicle(vehicle)

        set((state) => ({
            vehicles: [...state.vehicles, newVehicle]
        }))

    }

}))