"use client"

import { pushNotification } from "@/services/notification-service"

export default function StudentDashboard() {

    return (

        <div>

            <h1 className="text-2xl font-bold mb-6">
                Student Dashboard
            </h1>

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

    )

}