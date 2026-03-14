"use client"

import React from "react"

export interface Lead {
    id: string
    name: string
    course: string
    phone: string
    status: "new" | "followup" | "converted"
}

interface LeadCardProps {
    lead: Lead
}

export default function LeadCard({ lead }: LeadCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {lead.name}
            </h3>

            <p className="text-sm text-gray-500">
                Course: {lead.course}
            </p>

            <p className="text-sm text-gray-500">
                Phone: {lead.phone}
            </p>

            <p
                className={`text-sm font-medium mt-1 ${lead.status === "converted"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
            >
                Status: {lead.status}
            </p>

        </div>

    )

}