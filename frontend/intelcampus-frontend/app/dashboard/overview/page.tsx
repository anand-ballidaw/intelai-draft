"use client"

import DashboardStats from "@/components/analytics/DashboardStatus"

export default function DashboardOverviewPage() {

    return (

        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-bold">
                IntelCampus Analytics Dashboard
            </h1>

            <DashboardStats />

        </div>

    )

}