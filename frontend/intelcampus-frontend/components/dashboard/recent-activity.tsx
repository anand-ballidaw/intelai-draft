"use client"

const activities = [
    {
        id: 1,
        text: "New student registered",
        time: "2 minutes ago",
    },
    {
        id: 2,
        text: "Course 'React Fundamentals' published",
        time: "1 hour ago",
    },
    {
        id: 3,
        text: "Subscription upgraded to Pro",
        time: "3 hours ago",
    },
    {
        id: 4,
        text: "New instructor joined platform",
        time: "Yesterday",
    },
]

export function RecentActivity() {
    return (
        <div className="rounded-xl border p-6 bg-background">
            <h2 className="text-lg font-semibold mb-4">
                Recent Activity
            </h2>

            <ul className="space-y-4">
                {activities.map((activity) => (
                    <li
                        key={activity.id}
                        className="flex justify-between text-sm"
                    >
                        <span>{activity.text}</span>
                        <span className="text-muted-foreground">
                            {activity.time}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}