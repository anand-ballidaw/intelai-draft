"use client"

import { useState } from "react"
import { useAttendanceStore } from "@/stores/attendance-store"

export default function AttendanceForm() {

    const { markAttendance } = useAttendanceStore()

    const [studentName, setStudentName] = useState("")
    const [className, setClassName] = useState("")
    const [status, setStatus] = useState("present")

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        markAttendance({

            id: Date.now().toString(),

            studentName,

            className,

            date: new Date().toISOString(),

            status: status as any

        })

        setStudentName("")
        setClassName("")

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-3">

            <input
                placeholder="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 rounded w-full"
            >

                <option value="present">Present</option>
                <option value="absent">Absent</option>

            </select>

            <button className="bg-green-600 text-white px-4 py-2 rounded">
                Mark Attendance
            </button>

        </form>

    )

}