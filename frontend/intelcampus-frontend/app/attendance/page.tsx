"use client"

import AttendanceForm from "@/components/attendance/AttendanceForm"
import AttendanceTable from "@/components/attendance/AttendanceTable"

export default function AttendancePage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Attendance Management
            </h1>

            <AttendanceForm />

            <AttendanceTable />

        </div>

    )

}