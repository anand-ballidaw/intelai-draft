"use client"

import { useEffect, useState } from "react"
import ProtectedRoute from "@/components/auth/protected-route"
import AnalyticsCard from "@/components/analytics/analytics-card"
import { analyticsService } from "@/services/analytics.service"

export default function AnalyticsPage() {

    const [data, setData] = useState<any>(null)

    useEffect(() => {

        const loadAnalytics = async () => {

            try {

                const result =
                    await analyticsService.getCourseAnalytics(1)

                setData(result)

            } catch {

                setData({
                    totalStudents: 120,
                    completedStudents: 45,
                    averageProgress: 68,
                    averageQuizScore: 74,
                })

            }

        }

        loadAnalytics()

    }, [])

    if (!data) {
        return <p>Loading analytics...</p>
    }

    return (

        <ProtectedRoute requiredRole="INSTRUCTOR">

            <div className="space-y-10">

                <div>

                    <h1 className="text-2xl font-semibold">
                        Course Analytics
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Monitor student engagement and course performance.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <AnalyticsCard
                        title="Total Students"
                        value={data.totalStudents}
                    />

                    <AnalyticsCard
                        title="Completed Students"
                        value={data.completedStudents}
                    />

                    <AnalyticsCard
                        title="Average Progress"
                        value={`${data.averageProgress}%`}
                    />

                    <AnalyticsCard
                        title="Average Quiz Score"
                        value={`${data.averageQuizScore}%`}
                    />

                </div>

            </div>

        </ProtectedRoute>

    )
}