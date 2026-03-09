"use client"

import { useTimetableStore } from "@/stores/timetable-store"

export default function TimetableTable() {

    const { timetable } = useTimetableStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Subject</th>
                    <th className="border p-2">Teacher</th>
                    <th className="border p-2">Room</th>
                    <th className="border p-2">Day</th>
                    <th className="border p-2">Period</th>
                </tr>

            </thead>

            <tbody>

                {timetable.map((t) => (

                    <tr key={t.id}>

                        <td className="border p-2">{t.className}</td>
                        <td className="border p-2">{t.subject}</td>
                        <td className="border p-2">{t.teacher}</td>
                        <td className="border p-2">{t.room}</td>
                        <td className="border p-2">{t.day}</td>
                        <td className="border p-2">{t.period}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}