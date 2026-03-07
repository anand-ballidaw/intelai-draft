"use client"

import { useRouter } from "next/navigation"
import { getAuthUser } from "@/lib/auth/auth-client"
import { useState, useEffect } from "react"
import GlobalSearch from "@/components/search/global-search"
import NotificationBell from "@/components/notifications/notification-bell"

export default function Topbar() {
    const router = useRouter()
    const [userName, setUserName] = useState<string>("")
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const user = getAuthUser()
        if (user) {
            setUserName(user.name)
        }

        const root = document.documentElement
        setIsDark(root.classList.contains("dark"))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("intelcampus_user")
        router.replace("/login")
    }

    const toggleTheme = () => {
        const root = document.documentElement

        if (root.classList.contains("dark")) {
            root.classList.remove("dark")
            setIsDark(false)
        } else {
            root.classList.add("dark")
            setIsDark(true)
        }
    }

    return (
        <header className="h-16 border-b bg-background flex items-center justify-between px-6">

            {/* Left section */}
            <div className="flex items-center gap-6">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <GlobalSearch />
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">

                <NotificationBell />

                <button
                    onClick={toggleTheme}
                    className="text-sm px-3 py-1 rounded-md border hover:bg-muted transition"
                >
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button>

                <div className="text-sm font-medium">
                    {userName}
                </div>

                <button
                    onClick={handleLogout}
                    className="text-sm px-3 py-1 rounded-md bg-destructive text-destructive-foreground hover:opacity-90 transition"
                >
                    Logout
                </button>

            </div>
        </header>
    )
}