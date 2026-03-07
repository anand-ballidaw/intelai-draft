"use client"

interface NotificationItemProps {
    title: string
    time: string
}

export default function NotificationItem({
    title,
    time,
}: NotificationItemProps) {
    return (
        <div className="px-4 py-3 border-b text-sm hover:bg-muted transition">
            <p className="font-medium">{title}</p>
            <p className="text-xs text-muted-foreground mt-1">{time}</p>
        </div>
    )
}