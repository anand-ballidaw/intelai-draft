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
            id: crypto.randomUUID(),
            number,
            driver,
            capacity
        })

        setNumber("")
        setDriver("")
        setCapacity(40)
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Vehicle Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border p-2 rounded w-full"
                required
            />

            <input
                placeholder="Driver Name"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="border p-2 rounded w-full"
                required
            />

            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="border p-2 rounded w-full"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Vehicle
            </button>

        </form>
    )
}