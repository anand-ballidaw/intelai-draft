"use client"

import React from "react"
import ComplaintCard, { Complaint } from "./ComplaintCard"

interface ComplaintListProps {
    complaints: Complaint[]
}

export default function ComplaintList({ complaints }: ComplaintListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {complaints.map((complaint) => (

                <ComplaintCard
                    key={complaint.id}
                    complaint={complaint}
                />

            ))}

        </div>

    )

}