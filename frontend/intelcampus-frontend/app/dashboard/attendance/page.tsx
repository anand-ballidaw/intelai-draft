"use client"

import React, { useState } from "react"
import AttendanceForm from "@/components/attendance/AttendanceForm"
import AttendanceList from "@/components/attendance/AttendanceList"
import { AttendanceRecord } from "@/components/attendance/AttendanceCard"

export default function AttendancePage() {

    const [records, setRecords] = useState<AttendanceRecord[]>([])

    const handleCreateRecord = (record: AttendanceRecord) => {

        setRecords([...records, record])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Attendance Management
            </h1>

            <AttendanceForm onCreate={handleCreateRecord} />

            <AttendanceList records={records} />

        </div>

    )

}