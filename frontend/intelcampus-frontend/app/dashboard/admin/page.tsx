import ProtectedRoute from "@/components/auth/protected-route"
import DashboardGrid from "@/components/dashboard/dashboard-grid"
import StatCard from "@/components/dashboard/stat-card"

export default function AdminDashboard() {
    return (
        <ProtectedRoute requiredRole="admin">
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Platform Overview
                </h1>

                <DashboardGrid>
                    <StatCard
                        title="Total Users"
                        value={1284}
                        description="Registered accounts"
                    />

                    <StatCard
                        title="Active Subscriptions"
                        value={842}
                        description="Pro tier members"
                    />

                    <StatCard
                        title="Total Courses"
                        value={73}
                        description="Published on platform"
                    />

                    <StatCard
                        title="Monthly Revenue"
                        value="₹3,42,000"
                        description="Current billing cycle"
                    />
                </DashboardGrid>
            </div>
        </ProtectedRoute>
    )
}