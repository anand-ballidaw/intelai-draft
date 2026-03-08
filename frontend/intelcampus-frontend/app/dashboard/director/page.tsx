import DashboardLayout from "@/components/layout/dashboard-layout"

export default function DirectorDashboard() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Director Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        Total Students
                    </h2>
                    <p className="text-3xl font-bold">
                        1240
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        Total Staff
                    </h2>
                    <p className="text-3xl font-bold">
                        85
                    </p>
                </div>

                <div className="border rounded-lg p-4">
                    <h2 className="font-semibold">
                        Monthly Revenue
                    </h2>
                    <p className="text-3xl font-bold">
                        ₹12,50,000
                    </p>
                </div>

            </div>

        </DashboardLayout>

    )

}