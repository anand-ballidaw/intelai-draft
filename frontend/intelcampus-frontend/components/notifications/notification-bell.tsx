"use client"

import { useState } from "react"
import { mockNotifications } from "@/lib/mock/mock-notifications"

export default function NotificationBell() {

    const [open, setOpen] = useState(false)

    return (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="relative"
            >

                🔔

                <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                    {mockNotifications.length}
                </span>

            </button>

            {open && (

                <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg">

                    <div className="p-3 border-b font-semibold">
                        Notifications
                    </div>

                    <div className="max-h-80 overflow-y-auto">

                        {mockNotifications.map((n) => (

                            <div key={n.id} className="p-3 border-b">

                                <p className="font-medium text-sm">
                                    {n.title}
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    {n.message}
                                </p>

                                <span className="text-xs text-gray-400">
                                    {n.time}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>

    )

}