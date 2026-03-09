"use client"

import { mockNotifications } from "@/lib/mock/mock-notifications"

export default function NotificationsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Notifications
            </h1>

            <div className="bg-white border rounded-lg shadow">

                {mockNotifications.map((n) => (

                    <div
                        key={n.id}
                        className="p-4 border-b hover:bg-gray-50"
                    >

                        <p className="font-semibold">
                            {n.title}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {n.message}
                        </p>

                        <span className="text-xs text-gray-400">
                            {n.time}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    )

}