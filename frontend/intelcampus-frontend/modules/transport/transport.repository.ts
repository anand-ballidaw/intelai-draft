import { apiRequest } from "@/services/api.service"
import { Vehicle } from "./transport.types"

export async function fetchVehicles(): Promise<Vehicle[]> {

    return apiRequest("/transport/vehicles")

}

export async function createVehicle(data: Vehicle): Promise<Vehicle> {

    return apiRequest("/transport/vehicles", {

        method: "POST",

        body: JSON.stringify(data)

    })

}