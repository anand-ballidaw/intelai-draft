"use client"

import { useEffect, useState } from "react"
import { analyticsService, RevenueAnalytics } from "@/services/analytics.service"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"

export default function RevenueChart() {

    const [data, setData] = useState<RevenueAnalytics[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const result = await analyticsService.getRevenueAnalytics()
        setData(result)
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                Revenue Growth
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}