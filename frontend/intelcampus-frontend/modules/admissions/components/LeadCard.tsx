"use client"

import { Lead } from "../admissions.types"

interface Props {

    lead: Lead

}

export default function LeadCard({ lead }: Props) {

    return (

        <div className="border rounded p-4 bg-white shadow-sm">

            <h3 className="font-semibold text-lg">
                {lead.name}
            </h3>

            <p className="text-sm text-gray-500">
                Course: {lead.course}
            </p>

            <p className="text-sm text-gray-500">
                Phone: {lead.phone}
            </p>

            <p className="text-sm text-gray-500">
                Status: {lead.status}
            </p>

        </div>

    )

}