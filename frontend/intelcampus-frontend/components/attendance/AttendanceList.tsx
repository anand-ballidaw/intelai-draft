"use client"

import React from "react"
import AttendanceCard, { AttendanceRecord } from "./AttendanceCard"

interface AttendanceListProps {
    records: AttendanceRecord[]
}

export default function AttendanceList({ records }: AttendanceListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {records.map((record) => (

                <AttendanceCard
                    key={record.id}
                    record={record}
                />

            ))}

        </div>

    )

}