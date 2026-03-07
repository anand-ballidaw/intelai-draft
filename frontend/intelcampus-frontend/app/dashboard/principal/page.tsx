import DashboardLayout from "@/components/layout/dashboard-layout"

export default function PrincipalDashboard() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Principal Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Attendance Today
                    </h2>
                    <p className="text-3xl font-bold">
                        92%
                    </p>
                </div>

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Classes Running
                    </h2>
                    <p className="text-3xl font-bold">
                        34
                    </p>
                </div>

                <div className="border p-4 rounded-lg">
                    <h2 className="font-semibold">
                        Pending Approvals
                    </h2>
                    <p className="text-3xl font-bold">
                        5
                    </p>
                </div>

            </div>

        </DashboardLayout>

    )

}