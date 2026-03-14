"use client"

import React from "react"

export interface Bus {
    id: string
    busNumber: string
    driverName: string
    routeName: string
}

interface BusCardProps {
    bus: Bus
}

export default function BusCard({ bus }: BusCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                Bus: {bus.busNumber}
            </h3>

            <p className="text-sm text-gray-500">
                Driver: {bus.driverName}
            </p>

            <p className="text-sm text-gray-500">
                Route: {bus.routeName}
            </p>

        </div>

    )

}