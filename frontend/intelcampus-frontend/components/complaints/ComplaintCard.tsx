"use client"

import React from "react"

export interface Complaint {
    id: string
    title: string
    description: string
    status: "open" | "resolved"
}

interface ComplaintCardProps {
    complaint: Complaint
}

export default function ComplaintCard({ complaint }: ComplaintCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {complaint.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                {complaint.description}
            </p>

            <p
                className={`text-sm font-medium mt-2 ${complaint.status === "resolved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
            >
                Status: {complaint.status}
            </p>

        </div>

    )

}