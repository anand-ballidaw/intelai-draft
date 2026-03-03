import ProtectedRoute from "@/components/auth/protected-route"
import DashboardGrid from "@/components/dashboard/dashboard-grid"
import StatCard from "@/components/dashboard/stats-card"

export default function StudentDashboard() {
    return (
        <ProtectedRoute requiredRole="student">
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Student Overview
                </h1>

                <DashboardGrid>
                    <StatCard
                        title="Enrolled Courses"
                        value={4}
                        description="Active learning courses"
                    />

                    <StatCard
                        title="Completed Modules"
                        value={12}
                        description="Across all courses"
                    />

                    <StatCard
                        title="Progress"
                        value="68%"
                        description="Overall completion rate"
                    />

                    <StatCard
                        title="Upcoming Deadlines"
                        value={2}
                        description="Assignments due soon"
                    />
                </DashboardGrid>
            </div>
        </ProtectedRoute>
    )
}