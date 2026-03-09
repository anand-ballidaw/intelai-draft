"use client"

import DashboardWidgets from "../../components/dashboard/DashboardWidgets"

export default function DashboardPage() {

    const role = "admin" // temporary mock role

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Dashboard
            </h1>

            <DashboardWidgets role={role} />

        </div>
    )
}