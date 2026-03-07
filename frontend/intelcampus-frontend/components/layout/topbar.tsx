"use client"

import { getAuthUser, logout } from "@/lib/auth/auth-client"
import { useRouter } from "next/navigation"
import NotificationBell from "@/components/notifications/notification-bell"

export default function Topbar() {

    const router = useRouter()
    const user = getAuthUser()

    const handleLogout = () => {

        logout()
        router.push("/signin")

    }

    return (

        <header className="border-b bg-background">

            <div className="flex items-center justify-between px-6 py-3">

                <div className="text-sm text-muted-foreground">
                    Institution: {user?.institution}
                </div>

                <div className="flex items-center gap-4">

                    <NotificationBell />

                    <span className="text-sm">
                        {user?.name}
                    </span>

                    <button
                        onClick={handleLogout}
                        className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>

    )

}