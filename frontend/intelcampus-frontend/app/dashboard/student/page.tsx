<<<<<<< HEAD
"use client"

import { pushNotification } from "@/services/notification-service"
=======
import DashboardLayout from "@/components/layout/dashboard-layout"
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

export default function StudentDashboard() {

    return (

<<<<<<< HEAD
        <div>
=======
        <DashboardLayout>
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

            <h1 className="text-2xl font-bold mb-6">
                Student Dashboard
            </h1>

<<<<<<< HEAD
            <button
                onClick={() =>
                    pushNotification(
                        "New Assignment",
                        "Math homework uploaded",
                        "assignment"
                    )
                }
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >

                Test Notification

            </button>

        </div>
=======
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
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

    )

}