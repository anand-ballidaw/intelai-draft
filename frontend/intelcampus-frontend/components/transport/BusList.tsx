"use client"

import React from "react"
import BusCard, { Bus } from "./BusCard"

interface BusListProps {
    buses: Bus[]
}

export default function BusList({ buses }: BusListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {buses.map((bus) => (

                <BusCard
                    key={bus.id}
                    bus={bus}
                />

            ))}

        </div>

    )

}