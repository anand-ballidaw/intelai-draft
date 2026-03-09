"use client"

import { useState } from "react"

interface Visitor {
    id: number
    name: string
    phone: string
    purpose: string
    department: string
    person: string
    checkIn: string
    checkOut?: string
}

export default function VisitorTable() {

    const [visitors, setVisitors] = useState<Visitor[]>([
        {
            id: 1,
            name: "Ramesh Kumar",
            phone: "9876543210",
            purpose: "Admission enquiry",
            department: "Admissions",
            person: "Admission Officer",
            checkIn: "10:15 AM",
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Purpose</th>
                    <th className="p-2 border">Department</th>
                    <th className="p-2 border">Visiting</th>
                    <th className="p-2 border">Check In</th>
                    <th className="p-2 border">Check Out</th>
                </tr>
            </thead>

            <tbody>
                {visitors.map(v => (
                    <tr key={v.id}>
                        <td className="p-2 border">{v.name}</td>
                        <td className="p-2 border">{v.phone}</td>
                        <td className="p-2 border">{v.purpose}</td>
                        <td className="p-2 border">{v.department}</td>
                        <td className="p-2 border">{v.person}</td>
                        <td className="p-2 border">{v.checkIn}</td>
                        <td className="p-2 border">
                            {v.checkOut || "Active"}
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}