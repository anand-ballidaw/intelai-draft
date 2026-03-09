"use client"

import { useAttendanceStore } from "@/stores/attendance-store"

export default function AttendanceTable() {

    const { records } = useAttendanceStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Student</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Status</th>
                </tr>

            </thead>

            <tbody>

                {records.map((r) => (

                    <tr key={r.id}>

                        <td className="border p-2">{r.studentName}</td>
                        <td className="border p-2">{r.className}</td>
                        <td className="border p-2">{r.date}</td>
                        <td className="border p-2">{r.status}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}