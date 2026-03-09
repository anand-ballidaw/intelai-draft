"use client"

import Link from "next/link"
import MeetingTable from "./components/MeetingTable"

export default function MeetingsPage() {
    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Meetings</h1>

                <Link
                    href="/meetings/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create Meeting
                </Link>
            </div>

            <MeetingTable />

        </div>
    )
}