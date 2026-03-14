"use client"

import React, { useState } from "react"
import { AttendanceRecord } from "./AttendanceCard"

interface AttendanceFormProps {
    onCreate: (record: AttendanceRecord) => void
}

export default function AttendanceForm({ onCreate }: AttendanceFormProps) {

    const [studentName, setStudentName] = useState("")
    const [className, setClassName] = useState("")
    const [status, setStatus] = useState<"present" | "absent">("present")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const record: AttendanceRecord = {

            id: crypto.randomUUID(),

            studentName,

            className,

            status,

            date: new Date().toISOString().split("T")[0]

        }

        onCreate(record)

        setStudentName("")
        setClassName("")
        setStatus("present")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Mark Attendance
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value as "present" | "absent")
                    }
                    className="w-full border rounded px-3 py-2"
                >

                    <option value="present">Present</option>
                    <option value="absent">Absent</option>

                </select>

            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Save Attendance
            </button>

        </form>

    )

}