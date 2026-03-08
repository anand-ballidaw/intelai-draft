"use client"

interface ActivityItemProps {
    title: string
    description: string
    time: string
}

export default function ActivityItem({
    title,
    description,
    time,
}: ActivityItemProps) {
    return (
        <div className="flex gap-4 py-3 border-b">
            <div className="w-2 h-2 mt-2 bg-primary rounded-full"></div>

            <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>

                <p className="text-sm text-muted-foreground mt-1">
                    {description}
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                    {time}
                </p>
            </div>
        </div>
    )
}