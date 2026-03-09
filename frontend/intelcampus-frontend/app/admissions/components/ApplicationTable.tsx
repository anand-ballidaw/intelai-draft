"use client"

import { useState } from "react"

interface Application {
    id: number
    studentName: string
    parentName: string
    phone: string
    course: string
    status: string
}

export default function ApplicationTable() {

    const [applications] = useState<Application[]>([
        {
            id: 1,
            studentName: "Rahul Sharma",
            parentName: "Rajesh Sharma",
            phone: "9876543210",
            course: "Class 8",
            status: "New"
        },
        {
            id: 2,
            studentName: "Anjali Verma",
            parentName: "Suresh Verma",
            phone: "9123456780",
            course: "Class 10",
            status: "Interview Scheduled"
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Student</th>
                    <th className="p-2 border">Parent</th>
                    <th className="p-2 border">Phone</th>
                    <th className="p-2 border">Course</th>
                    <th className="p-2 border">Status</th>
                </tr>
            </thead>

            <tbody>
                {applications.map((app) => (
                    <tr key={app.id}>
                        <td className="p-2 border">{app.studentName}</td>
                        <td className="p-2 border">{app.parentName}</td>
                        <td className="p-2 border">{app.phone}</td>
                        <td className="p-2 border">{app.course}</td>
                        <td className="p-2 border">{app.status}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}