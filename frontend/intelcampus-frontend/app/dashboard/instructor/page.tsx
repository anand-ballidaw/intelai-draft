import ProtectedRoute from "@/components/auth/protected-route"
import DashboardGrid from "@/components/dashboard/dashboard-grid"
import StatCard from "@/components/dashboard/stat-card"

export default function InstructorDashboard() {
    return (
        <ProtectedRoute requiredRole="instructor">
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Instructor Overview
                </h1>

                <DashboardGrid>
                    <StatCard
                        title="Total Courses"
                        value={6}
                        description="Courses you manage"
                    />

                    <StatCard
                        title="Active Students"
                        value={142}
                        description="Across all courses"
                    />

                    <StatCard
                        title="Pending Reviews"
                        value={8}
                        description="Assignments awaiting grading"
                    />

                    <StatCard
                        title="Monthly Revenue"
                        value="₹48,000"
                        description="Estimated earnings"
                    />
                </DashboardGrid>
            </div>
        </ProtectedRoute>
    )
}