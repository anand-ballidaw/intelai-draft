"use client"

import DashboardStats from "@/components/analytics/DashboardStats"
import DashboardStatus from "@/components/analytics/DashboardStatus"
import AdmissionsChart from "@/components/analytics/AdmissionsChart"
import AttendanceChart from "@/components/analytics/AttendanceChart"
import RevenueChart from "@/components/analytics/RevenueChart"

export default function AnalyticsPage() {

    return (

        <div className="p-6 space-y-8">

            <h1 className="text-2xl font-bold">
                AI Analytics Dashboard
            </h1>

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <AdmissionsChart />

                <AttendanceChart />

            </div>

            <RevenueChart />

            <DashboardStatus />

        </div>

    )

}