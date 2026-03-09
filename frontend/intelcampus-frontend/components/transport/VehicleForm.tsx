"use client"

import { useState } from "react"
import { useTransportStore } from "@/stores/transport-store"

export default function VehicleForm() {

    const { addVehicle } = useTransportStore()

    const [number, setNumber] = useState("")
    const [driver, setDriver] = useState("")
    const [capacity, setCapacity] = useState(40)

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addVehicle({
            id: Date.now().toString(),
            number,
            driver,
            capacity
        })

        setNumber("")
        setDriver("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Vehicle Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Driver Name"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Vehicle
            </button>

        </form>
    )
}