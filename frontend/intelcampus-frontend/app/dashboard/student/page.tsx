import DashboardLayout from "@/components/layout/dashboard-layout"

export default function StudentDashboard() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Student Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Attendance
                    </h2>
                    <p className="text-3xl font-bold">
                        88%
                    </p>
                </div>

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Assignments
                    </h2>
                    <p className="text-3xl font-bold">
                        3
                    </p>
                </div>

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Notifications
                    </h2>
                    <p className="text-3xl font-bold">
                        4
                    </p>
                </div>

            </div>

        </DashboardLayout>

    )

}