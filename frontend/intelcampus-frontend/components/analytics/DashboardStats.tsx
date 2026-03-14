"use client"

import { DashboardStats } from "@/types/analytics"

interface DashboardStatsProps {
    stats: DashboardStats
}

export default function DashboardStatsComponent({ stats }: DashboardStatsProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Students</p>
                <p className="text-2xl font-bold">{stats.students}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Teachers</p>
                <p className="text-2xl font-bold">{stats.teachers}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Courses</p>
                <p className="text-2xl font-bold">{stats.courses}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-2xl font-bold">₹{stats.revenue}</p>
            </div>

        </div>

    )

}