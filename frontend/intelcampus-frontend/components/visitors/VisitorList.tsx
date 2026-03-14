"use client"

import React from "react"
import VisitorCard, { Visitor } from "./VisitorCard"

interface VisitorListProps {
    visitors: Visitor[]
}

export default function VisitorList({ visitors }: VisitorListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {visitors.map((visitor) => (

                <VisitorCard
                    key={visitor.id}
                    visitor={visitor}
                />

            ))}

        </div>

    )

}