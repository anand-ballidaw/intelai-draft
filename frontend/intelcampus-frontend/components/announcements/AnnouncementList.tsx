"use client"

import { useAnnouncementStore } from "@/stores/announcement-store"

export default function AnnouncementList() {

    const { announcements } = useAnnouncementStore()

    return (

        <div className="space-y-4 mt-6">

            {announcements.map((a) => (

                <div
                    key={a.id}
                    className="border rounded-lg p-4 bg-white"
                >

                    <h3 className="font-semibold text-lg">
                        {a.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                        {a.message}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">

                        Target: {a.target}

                    </p>

                </div>

            ))}

        </div>

    )

}