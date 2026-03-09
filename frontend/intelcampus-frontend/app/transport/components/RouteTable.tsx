"use client"

import { useState } from "react"

interface Route {
    id: number
    routeName: string
    driver: string
    vehicleNumber: string
    stops: number
}

export default function RouteTable() {

    const [routes] = useState<Route[]>([
        {
            id: 1,
            routeName: "North City Route",
            driver: "Ravi Kumar",
            vehicleNumber: "KA01AB1234",
            stops: 8
        },
        {
            id: 2,
            routeName: "East City Route",
            driver: "Mahesh Reddy",
            vehicleNumber: "KA01CD5678",
            stops: 10
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Route</th>
                    <th className="p-2 border">Driver</th>
                    <th className="p-2 border">Vehicle</th>
                    <th className="p-2 border">Stops</th>
                </tr>
            </thead>

            <tbody>
                {routes.map((route) => (
                    <tr key={route.id}>
                        <td className="p-2 border">{route.routeName}</td>
                        <td className="p-2 border">{route.driver}</td>
                        <td className="p-2 border">{route.vehicleNumber}</td>
                        <td className="p-2 border">{route.stops}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}