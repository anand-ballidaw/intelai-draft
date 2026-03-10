"use client"

import ProtectedRoute from "@/components/auth/protected-route"
import StatCard from "@/components/dashboard/StatCard"

export default function AdminDashboard() {

    return (

        <ProtectedRoute requiredRole="admin">

            <div className="space-y-8">

                <h1 className="text-2xl font-semibold">
                    Platform Overview
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <StatCard
                        title="Total Students"
                        value={1240}
                        description="Across all institutions"
                    />

                    <StatCard
                        title="Total Teachers"
                        value={85}
                        description="Active educators"
                    />

                    <StatCard
                        title="Revenue"
                        value="$12,500"
                        description="Monthly subscription revenue"
                    />

                </div>

            </div>

        </ProtectedRoute>

    )

}