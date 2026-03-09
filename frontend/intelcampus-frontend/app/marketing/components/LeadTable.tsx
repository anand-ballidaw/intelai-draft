"use client"

import { useState } from "react"

interface Lead {
    id: number
    name: string
    phone: string
    email: string
    source: string
    status: string
}

export default function LeadTable() {

    const [leads] = useState<Lead[]>([
        {
            id: 1,
            name: "Kiran Kumar",
            phone: "9876543210",
            email: "kiran@example.com",
            source: "Facebook",
            status: "New"
        },
        {
            id: 2,
            name: "Sneha Reddy",
            phone: "9123456780",
            email: "sneha@example.com",
            source: "Website",
            status: "Contacted"
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Source</th>
                    <th className="p-2 border">Status</th>
                </tr>
            </thead>

            <tbody>
                {leads.map((lead) => (
                    <tr key={lead.id}>
                        <td className="p-2 border">{lead.name}</td>
                        <td className="p-2 border">{lead.phone}</td>
                        <td className="p-2 border">{lead.email}</td>
                        <td className="p-2 border">{lead.source}</td>
                        <td className="p-2 border">{lead.status}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}