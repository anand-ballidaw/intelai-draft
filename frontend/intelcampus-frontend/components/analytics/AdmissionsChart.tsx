"use client"

import { useEffect, useState } from "react"
import { analyticsService, AdmissionsTrend } from "@/services/analytics.service"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"

export default function AdmissionsChart() {

    const [data, setData] = useState<AdmissionsTrend[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const result = await analyticsService.getAdmissionsTrend()
        setData(result)
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                Admissions Trend
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="admissions" fill="#16a34a" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}