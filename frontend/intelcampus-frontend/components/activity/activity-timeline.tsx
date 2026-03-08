"use client"

import ActivityItem from "./activity-item"

const activities = [
    {
        title: "Course Completed",
        description: "You completed React Fundamentals",
        time: "5 minutes ago",
    },
    {
        title: "Quiz Passed",
        description: "You passed the React Hooks quiz",
        time: "1 hour ago",
    },
    {
        title: "Certificate Generated",
        description: "Your certificate for React Fundamentals is ready",
        time: "Yesterday",
    },
    {
        title: "New Course Available",
        description: "Advanced TypeScript course published",
        time: "2 days ago",
    },
]

export default function ActivityTimeline() {
    return (
        <div className="rounded-xl border p-6 bg-background">
            <h2 className="text-lg font-semibold mb-4">
                Activity Timeline
            </h2>

            <div>
                {activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        title={activity.title}
                        description={activity.description}
                        time={activity.time}
                    />
                ))}
            </div>
        </div>
    )
}