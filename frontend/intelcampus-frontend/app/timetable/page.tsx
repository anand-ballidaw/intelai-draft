"use client"

import TimetableForm from "@/components/timetable/TimetableForm"
import TimetableTable from "@/components/timetable/TimetableTable"

export default function TimetablePage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Timetable Management
            </h1>

            <TimetableForm />

            <TimetableTable />

        </div>

    )

}