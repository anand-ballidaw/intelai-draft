import ProtectedRoute from "@/components/auth/protected-route"
import DashboardGrid from "@/components/dashboard/dashboard-grid"
import StatsCard from "@/components/dashboard/dashboard-layout"

export default function InstructorDashboard() {
    return (
        <ProtectedRoute requiredRole="INSTRUCTOR">
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Instructor Overview
                </h1>

                <DashboardGrid>
                    <StatsCard
                        title="Total Courses"
                        value={6}
                        description="Courses you manage"
                    />

                    <StatsCard
                        title="Active Students"
                        value={142}
                        description="Across all courses"
                    />

                    <StatsCard
                        title="Pending Reviews"
                        value={8}
                        description="Assignments awaiting grading"
                    />

                    <StatsCard
                        title="Monthly Revenue"
                        value="₹48,000"
                        description="Estimated earnings"
                    />
                </DashboardGrid>
            </div>
        </ProtectedRoute>
    )
}