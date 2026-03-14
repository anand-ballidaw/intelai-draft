"use client"

import { useNotificationStore } from "@/stores/notification-store"

export default function NotificationDropdown() {

    const {
        notifications,
        markAsRead
    } = useNotificationStore()

    return (

        <div className="relative">

            <button className="text-gray-600 hover:text-black">
                Notifications ({notifications.filter(n => !n.read).length})
            </button>

            <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">

                <div className="p-4 border-b font-semibold">
                    Notifications
                </div>

                {notifications.length === 0 && (

                    <div className="p-4 text-sm text-gray-500">
                        No notifications
                    </div>

                )}

                {notifications.map((n) => (

                    <div
                        key={n.id}
                        onClick={() => markAsRead(n.id)}
                        className={`p-4 border-b cursor-pointer ${!n.read ? "bg-gray-50" : ""
                            }`}
                    >

                        <div className="font-medium">
                            {n.title}
                        </div>

                        <div className="text-sm text-gray-500">
                            {n.message}
                        </div>

                        <div className="text-xs text-gray-400 mt-1">
                            {new Date(n.createdAt).toLocaleString()}
                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}