export interface Vehicle {
    id: string
    number: string
    driver: string
    capacity: number
}

export interface Route {
    id: string
    name: string
    vehicleId: string
}

export interface PickupStudent {
    id: string
    studentName: string
    stop: string
    routeId: string
    picked: boolean
}