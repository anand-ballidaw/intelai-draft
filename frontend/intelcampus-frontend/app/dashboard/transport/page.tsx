"use client"

import React, { useState } from "react"
import BusForm from "@/components/transport/BusForm"
import BusList from "@/components/transport/BusList"
import { Bus } from "@/components/transport/BusCard"

export default function TransportPage() {

    const [buses, setBuses] = useState<Bus[]>([])

    const handleCreateBus = (bus: Bus) => {

        setBuses([...buses, bus])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Transport Management
            </h1>

            <BusForm onCreate={handleCreateBus} />

            <BusList buses={buses} />

        </div>

    )

}