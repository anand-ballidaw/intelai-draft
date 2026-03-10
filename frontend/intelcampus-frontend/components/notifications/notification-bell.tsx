"use client"

import { Bell } from "lucide-react"
import { useNotificationStore } from "@/stores/notification-store"

export default function NotificationBell() {
    const notifications = useNotificationStore((s) => s.notifications)

    return (
        <div className="relative">
            <Bell className="w-6 h-6" />

            {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {notifications.length}
                </span>
            )}
        </div>
    )
}