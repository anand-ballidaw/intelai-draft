"use client"

import { useState } from "react"
import { useNotificationStore } from "@/stores/notification-store"

export default function NotificationBell() {

    const [open, setOpen] = useState(false)

    const { notifications, markAsRead } = useNotificationStore()

    const unread = notifications.filter((n) => !n.read).length

    return (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="relative"
            >

                🔔

                {unread > 0 && (

                    <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                        {unread}
                    </span>

                )}

            </button>

            {open && (

                <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg">

                    <div className="p-3 border-b font-semibold">
                        Notifications
                    </div>

                    <div className="max-h-80 overflow-y-auto">

                        {notifications.map((n) => (

                            <div
                                key={n.id}
                                className="p-3 border-b cursor-pointer hover:bg-gray-50"
                                onClick={() => markAsRead(n.id)}
                            >

                                <p className="font-medium text-sm">
                                    {n.title}
                                </p>

                                <p className="text-xs text-gray-600">
                                    {n.message}
                                </p>

                                <span className="text-xs text-gray-400">
                                    {new Date(n.createdAt).toLocaleString()}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>

    )

}