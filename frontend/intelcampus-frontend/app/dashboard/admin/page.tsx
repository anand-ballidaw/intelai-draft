import ProtectedRoute from "@/components/auth/protected-route"
import DashboardGrid from "@/components/dashboard/dashboard-grid"
import StatsCard from "@/components/dashboard/dashboard-layout"

export default function AdminDashboard() {
    return (
        <ProtectedRoute requiredRole="ADMIN">
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Platform Overview
                </h1>

                <DashboardGrid>
                    <StatsCard
                        title="Total Users"
                        value={1284}
                        description="Registered accounts"
                    />

                    <StatsCard
                        title="Active Subscriptions"
                        value={842}
                        description="Pro tier members"
                    />

                    <StatsCard
                        title="Total Courses"
                        value={73}
                        description="Published on platform"
                    />

                    <StatsCard
                        title="Monthly Revenue"
                        value="₹3,42,000"
                        description="Current billing cycle"
                    />
                </DashboardGrid>
            </div>
        </ProtectedRoute>
    )
}