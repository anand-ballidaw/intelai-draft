"use client"

import VehicleForm from "@/components/transport/VehicleForm"
import PickupList from "@/components/transport/PickupList"

export default function TransportPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Transport Management
            </h1>

            <VehicleForm />

            <PickupList />

        </div>

    )

}