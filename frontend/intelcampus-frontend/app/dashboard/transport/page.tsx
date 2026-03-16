"use client"

import { useEffect } from "react"
import { useTransportStore } from "@/modules/transport/transport.store"
import VehicleCard from "@/modules/transport/components/VehicleCard"

export default function TransportPage() {

    const { vehicles, loadVehicles } = useTransportStore()

    useEffect(() => {

        loadVehicles()

    }, [])

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Transport
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {vehicles.map((vehicle) => (

                    <VehicleCard
                        key={vehicle.id}
                        vehicle={vehicle}
                    />

                ))}

            </div>

        </div>

    )

}