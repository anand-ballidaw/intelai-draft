"use client"

import React from "react"

export interface AttendanceRecord {
    id: string
    studentName: string
    className: string
    status: "present" | "absent"
    date: string
}

interface AttendanceCardProps {
    record: AttendanceRecord
}

export default function AttendanceCard({ record }: AttendanceCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {record.studentName}
            </h3>

            <p className="text-sm text-gray-500">
                Class: {record.className}
            </p>

            <p className="text-sm text-gray-500">
                Date: {record.date}
            </p>

            <p
                className={`text-sm font-medium mt-1 ${record.status === "present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
            >
                Status: {record.status}
            </p>

        </div>

    )

}