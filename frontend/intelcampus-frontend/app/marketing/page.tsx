"use client"

import MeetingForm from "@/components/meeting/MeetingForm"
import MeetingTable from "@/components/meeting/MeetingTable"

export default function MeetingsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Meeting & Appointment System
            </h1>

            <MeetingForm />

            <MeetingTable />

        </div>

    )

}