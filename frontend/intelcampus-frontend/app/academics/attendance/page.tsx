"use client"

import { useState } from "react"
import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockAttendance } from "@/lib/mock/mock-attendance"

export default function AttendancePage() {

    const [selectedClass, setSelectedClass] = useState("10")
    const [selectedSection, setSelectedSection] = useState("A")

    const filteredAttendance = mockAttendance.filter(
        (a) =>
            a.class === selectedClass &&
            a.section === selectedSection
    )

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Attendance
            </h1>

            {/* Filters */}

            <div className="flex gap-4 mb-6">

                <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="border px-3 py-2 rounded-md"
                >

                    <option value="10">Class 10</option>
                    <option value="9">Class 9</option>

                </select>

                <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    className="border px-3 py-2 rounded-md"
                >

                    <option value="A">Section A</option>
                    <option value="B">Section B</option>

                </select>

            </div>

            {/* Table */}

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Student</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredAttendance.map((a) => (

                            <tr key={a.id} className="border-t">

                                <td className="p-3">{a.name}</td>

                                <td className="p-3">

                                    {a.status === "Present" ? (
                                        <span className="text-green-600">
                                            Present
                                        </span>
                                    ) : (
                                        <span className="text-red-600">
                                            Absent
                                        </span>
                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}