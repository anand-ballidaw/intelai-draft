"use client"

import { useEffect, useState } from "react"
import { analyticsService, AttendanceTrend } from "@/services/analytics.service"

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"

export default function AttendanceChart() {

    const [data, setData] = useState<AttendanceTrend[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const result = await analyticsService.getAttendanceTrend()
        setData(result)
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                Weekly Attendance
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="attendanceRate" stroke="#f59e0b" fill="#fde68a" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    )
}