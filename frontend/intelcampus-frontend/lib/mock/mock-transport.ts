export interface BusRoute {
    id: string
    name: string
    driver: string
    vehicle: string
}

export interface Driver {
    id: string
    name: string
    vehicle: string
    phone: string
}

export const mockRoutes: BusRoute[] = [
    {
        id: "1",
        name: "City Center Route",
        driver: "Ravi",
        vehicle: "KA01-1234",
    },
    {
        id: "2",
        name: "North Campus Route",
        driver: "Suresh",
        vehicle: "KA01-5678",
    },
]

export const mockDrivers: Driver[] = [
    {
        id: "1",
        name: "Ravi",
        vehicle: "KA01-1234",
        phone: "8888888888",
    },
    {
        id: "2",
        name: "Suresh",
        vehicle: "KA01-5678",
        phone: "9999999999",
    },
]