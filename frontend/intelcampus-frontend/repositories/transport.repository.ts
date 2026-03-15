import { apiRequest } from "@/services/api.service"
import { Vehicle } from "@/core/domain/Vehicle"

export async function fetchVehicles(): Promise<Vehicle[]> {

    return apiRequest("/transport/vehicles")

}

export async function saveVehicle(data: Vehicle): Promise<Vehicle> {

    return apiRequest("/transport/vehicles", {

        method: "POST",

        body: JSON.stringify(data)

    })

}