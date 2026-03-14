"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getDashboardRoute } from "@/lib/dashboard/role-dashboard-router"
import { useAuthStore } from "@/stores/auth-store"

export default function DashboardRedirect() {

    const router = useRouter()

    const user = useAuthStore((state) => state.user)

    useEffect(() => {

        if (!user) return

        const route = getDashboardRoute(user.role)

        router.replace(route)

    }, [user, router])

    return (
        <div className="p-6 text-gray-500">
            Redirecting to your dashboard...
        </div>
    )

}