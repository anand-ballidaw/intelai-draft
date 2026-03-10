import StatCard from "@/components/dashboard/StatCard"

export default function DashboardPage() {

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
                title="Total Students"
                value={1250}
                description="Active enrolled students"
            />

            <StatCard
                title="Total Teachers"
                value={85}
                description="Faculty members"
            />

            <StatCard
                title="Attendance Rate"
                value="92%"
                description="Average attendance"
            />

        </div>

    )

}