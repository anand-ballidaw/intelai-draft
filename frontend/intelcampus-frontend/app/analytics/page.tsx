"use client"

import DashboardLayout from "@/components/layout/dashboard-layout"
import {
    attendanceStats,
    financeStats,
    performanceStats,
} from "@/lib/mock/mock-analytics"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts"

export default function AnalyticsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Analytics Dashboard
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Attendance Chart */}

                <div className="border rounded-lg p-4">

                    <h2 className="font-semibold mb-4">
                        Attendance Trend
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>

                        <LineChart data={attendanceStats}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />
                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="attendance"
                                stroke="#4f46e5"
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

                {/* Finance Chart */}

                <div className="border rounded-lg p-4">

                    <h2 className="font-semibold mb-4">
                        Fee Collection
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>

                        <BarChart data={financeStats}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />
                            <YAxis />

                            <Tooltip />

                            <Bar dataKey="fees" fill="#16a34a" />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                {/* Performance Chart */}

                <div className="border rounded-lg p-4 lg:col-span-2">

                    <h2 className="font-semibold mb-4">
                        Subject Performance
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>

                        <BarChart data={performanceStats}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="subject" />
                            <YAxis />

                            <Tooltip />

                            <Bar dataKey="average" fill="#6366f1" />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </DashboardLayout>

    )

}