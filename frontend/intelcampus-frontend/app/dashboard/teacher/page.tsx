import DashboardLayout from "@/components/layout/dashboard-layout"

export default function TeacherDashboard() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Teacher Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        My Classes
                    </h2>
                    <p className="text-3xl font-bold">
                        6
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        Assignments
                    </h2>
                    <p className="text-3xl font-bold">
                        12
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        Messages
                    </h2>
                    <p className="text-3xl font-bold">
                        8
                    </p>
                </div>

            </div>

        </DashboardLayout>

    )

}