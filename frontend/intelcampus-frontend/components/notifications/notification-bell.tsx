"use client"

import { useState } from "react"
<<<<<<< HEAD
import { useNotificationStore } from "@/stores/notification-store"
=======
import { mockNotifications } from "@/lib/mock/mock-notifications"
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

export default function NotificationBell() {

    const [open, setOpen] = useState(false)

<<<<<<< HEAD
    const { notifications, markAsRead } = useNotificationStore()

    const unread = notifications.filter((n) => !n.read).length

=======
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
    return (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="relative"
            >

                🔔

<<<<<<< HEAD
                {unread > 0 && (

                    <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                        {unread}
                    </span>

                )}
=======
                <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                    {mockNotifications.length}
                </span>
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

            </button>

            {open && (

                <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg">

                    <div className="p-3 border-b font-semibold">
                        Notifications
                    </div>

                    <div className="max-h-80 overflow-y-auto">

<<<<<<< HEAD
                        {notifications.map((n) => (

                            <div
                                key={n.id}
                                className="p-3 border-b cursor-pointer hover:bg-gray-50"
                                onClick={() => markAsRead(n.id)}
                            >
=======
                        {mockNotifications.map((n) => (

                            <div key={n.id} className="p-3 border-b">
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

                                <p className="font-medium text-sm">
                                    {n.title}
                                </p>

<<<<<<< HEAD
                                <p className="text-xs text-gray-600">
=======
                                <p className="text-xs text-muted-foreground">
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
                                    {n.message}
                                </p>

                                <span className="text-xs text-gray-400">
<<<<<<< HEAD
                                    {new Date(n.createdAt).toLocaleString()}
=======
                                    {n.time}
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>

    )

}