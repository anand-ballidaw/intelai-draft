"use client"

import { Vehicle } from "../transport.types"

interface Props {

    vehicle: Vehicle

}

export default function VehicleCard({ vehicle }: Props) {

    return (

        <div className="border rounded p-4 bg-white shadow-sm">

            <h3 className="font-semibold text-lg">
                {vehicle.number}
            </h3>

            <p className="text-sm text-gray-500">
                Driver: {vehicle.driver}
            </p>

            <p className="text-sm text-gray-500">
                Capacity: {vehicle.capacity}
            </p>

            <p className="text-sm text-gray-500">
                Route: {vehicle.routeName}
            </p>

        </div>

    )

}