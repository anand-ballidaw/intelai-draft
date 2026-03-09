"use client"

import ApplicationTable from "../components/ApplicationTable"

export default function ApplicationsPage() {
    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Admission Applications
            </h1>

            <ApplicationTable />

        </div>
    )
}