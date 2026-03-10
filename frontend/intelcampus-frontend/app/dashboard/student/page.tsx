import StatCard from "@/components/dashboard/StatCard"

export default function StudentDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Courses Enrolled" value={6} />
            <StatCard title="Assignments Pending" value={2} />
            <StatCard title="Completed Lessons" value={24} />
        </div>
    )
}