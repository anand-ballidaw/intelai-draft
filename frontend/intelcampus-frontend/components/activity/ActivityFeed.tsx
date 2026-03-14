"use client"

import { useActivityStore } from "@/stores/activity-store"

export default function ActivityFeed() {

    const { activities } = useActivityStore()

    return (

        <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-4">
                Recent Activity
            </h2>

            <div className="space-y-3">

                {activities.length === 0 && (

                    <p className="text-gray-500 text-sm">
                        No activity yet
                    </p>

                )}

                {activities.map((activity) => (

                    <div
                        key={activity.id}
                        className="border rounded-md p-3 text-sm"
                    >

                        <p className="font-medium">
                            {activity.message}
                        </p>

                        <p className="text-gray-500 text-xs">
                            {new Date(activity.createdAt).toLocaleString()}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    )

}