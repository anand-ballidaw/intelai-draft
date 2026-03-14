"use client"

import React from "react"
import LeadCard, { Lead } from "./LeadCard"

interface LeadListProps {
    leads: Lead[]
}

export default function LeadList({ leads }: LeadListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {leads.map((lead) => (

                <LeadCard
                    key={lead.id}
                    lead={lead}
                />

            ))}

        </div>

    )

}