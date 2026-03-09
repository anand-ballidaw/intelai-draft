import { apiRequest } from "./api"

export async function getVehicles() {

    return apiRequest("/transport/vehicles")

}

export async function createVehicle(data: any) {

    return apiRequest("/transport/vehicles", {

        method: "POST",

        body: JSON.stringify(data)

    })

}