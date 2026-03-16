"use client"

import { useEffect } from "react"
import { useAnalyticsStore } from "../store/analytics.store"

export default function DashboardStats() {

    const { stats, fetchDashboardStats } = useAnalyticsStore()

    useEffect(() => {
        fetchDashboardStats()
    }, [])

    if (!stats) return <div>Loading analytics...</div>

    return (

        <div className="grid grid-cols-4 gap-4">

            <div className="border rounded-lg p-4">
                <h3 className="text-sm text-gray-500">Students</h3>
                <p className="text-xl font-bold">{stats.totalStudents}</p>
            </div>

            <div className="border rounded-lg p-4">
                <h3 className="text-sm text-gray-500">Employees</h3>
                <p className="text-xl font-bold">{stats.totalEmployees}</p>
            </div>

            <div className="border rounded-lg p-4">
                <h3 className="text-sm text-gray-500">Courses</h3>
                <p className="text-xl font-bold">{stats.totalCourses}</p>
            </div>

            <div className="border rounded-lg p-4">
                <h3 className="text-sm text-gray-500">Departments</h3>
                <p className="text-xl font-bold">{stats.totalDepartments}</p>
            </div>

        </div>

    )
}