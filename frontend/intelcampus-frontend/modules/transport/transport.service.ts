import { Vehicle } from "./transport.types"
import { fetchVehicles, createVehicle } from "./transport.repository"
import { eventBus } from "@/services/event-bus.service"

export async function getVehicles(): Promise<Vehicle[]> {

    return fetchVehicles()

}

export async function addVehicle(data: Vehicle): Promise<Vehicle> {

    const result = await createVehicle(data)

    eventBus.emit("NEW_VEHICLE", result)

    return result

}