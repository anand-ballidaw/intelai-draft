"use client"

import DashboardStats from "./DashboardStats"

export default function AnalyticsDashboard() {

    return (

        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-bold">
                Institutional Analytics
            </h1>

            <DashboardStats />

        </div>

    )
}