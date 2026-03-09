"use client"

import NotificationBell from "./notifications/notification-bell"
import GlobalSearch from "@/components/search/GlobalSearch"

export default function Navbar() {

    return (
        <div className="w-full h-14 bg-white border-b flex items-center justify-between px-6">

            <h1 className="font-bold text-lg">
                IntelCampus
            </h1>

            <div className="flex items-center gap-6">

                <NotificationBell />
                <GlobalSearch />

                <div className="font-medium">
                    Admin
                </div>

            </div>

        </div>
    )

}