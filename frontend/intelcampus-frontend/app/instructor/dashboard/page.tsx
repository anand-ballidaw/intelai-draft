"use client"

export default function InstructorDashboardPage() {

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">
                    Instructor Dashboard
                </h1>

                <p className="text-muted-foreground">
                    Manage your courses, lessons, and students.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-6">

                    <h2 className="text-sm text-muted-foreground">
                        Total Courses
                    </h2>

                    <p className="text-2xl font-bold mt-2">
                        0
                    </p>

                </div>

                <div className="border rounded-lg p-6">

                    <h2 className="text-sm text-muted-foreground">
                        Total Students
                    </h2>

                    <p className="text-2xl font-bold mt-2">
                        0
                    </p>

                </div>

                <div className="border rounded-lg p-6">

                    <h2 className="text-sm text-muted-foreground">
                        Revenue
                    </h2>

                    <p className="text-2xl font-bold mt-2">
                        ₹0
                    </p>

                </div>

            </div>

            <div className="border rounded-lg p-6">

                <h2 className="text-lg font-semibold mb-4">
                    Recent Activity
                </h2>

                <p className="text-sm text-muted-foreground">
                    No activity yet.
                </p>

            </div>

        </div>

    )

}