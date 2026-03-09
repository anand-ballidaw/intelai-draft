"use client"

import StatCard from "./StatCard"
import { useAnalyticsStore } from "@/stores/analytics-store"

export default function DashboardStats() {

    const { stats } = useAnalyticsStore()

    return (

        <div className="grid grid-cols-4 gap-4">

            <StatCard
                title="Students"
                value={stats.totalStudents}
            />

            <StatCard
                title="Teachers"
                value={stats.totalTeachers}
            />

            <StatCard
                title="Courses"
                value={stats.totalCourses}
            />

            <StatCard
                title="Admissions"
                value={stats.totalAdmissions}
            />

            <StatCard
                title="Vehicles"
                value={stats.totalVehicles}
            />

            <StatCard
                title="Employees"
                value={stats.totalEmployees}
            />

            <StatCard
                title="Revenue"
                value={`₹ ${stats.totalRevenue}`}
            />

        </div>

    )

}