"use client"

export default function AdminDashboardPage() {

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Admin Dashboard
            </h1>

            <p className="text-muted-foreground">
                Welcome to the IntelCampus Admin Panel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-6">
                    <h2 className="font-semibold mb-2">
                        Total Students
                    </h2>
                    <p className="text-2xl font-bold">
                        0
                    </p>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="font-semibold mb-2">
                        Total Courses
                    </h2>
                    <p className="text-2xl font-bold">
                        0
                    </p>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="font-semibold mb-2">
                        Total Revenue
                    </h2>
                    <p className="text-2xl font-bold">
                        ₹0
                    </p>
                </div>

            </div>

        </div>

    )

}