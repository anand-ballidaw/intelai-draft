"use client"

import { useState } from "react"

interface Meeting {
    id: number
    title: string
    department: string
    organizer: string
    date: string
    location: string
}

export default function MeetingTable() {

    const [meetings] = useState<Meeting[]>([
        {
            id: 1,
            title: "Academic Planning",
            department: "Academic Department",
            organizer: "Principal",
            date: "2026-03-12 10:00 AM",
            location: "Conference Room"
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Title</th>
                    <th className="p-2 border">Department</th>
                    <th className="p-2 border">Organizer</th>
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Location</th>
                </tr>
            </thead>

            <tbody>
                {meetings.map((m) => (
                    <tr key={m.id}>
                        <td className="p-2 border">{m.title}</td>
                        <td className="p-2 border">{m.department}</td>
                        <td className="p-2 border">{m.organizer}</td>
                        <td className="p-2 border">{m.date}</td>
                        <td className="p-2 border">{m.location}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}