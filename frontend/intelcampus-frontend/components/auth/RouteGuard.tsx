"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuthStore } from "@/stores/auth-store"
import { roleAccess } from "@/config/roleAccess"

export default function RouteGuard({ children }: { children: React.ReactNode }) {

    const router = useRouter()
    const pathname = usePathname()

    const user = useAuthStore((state) => state.user)

    useEffect(() => {

        if (!user) {
            router.push("/signin")
            return
        }

        const allowedRoutes = roleAccess[user.role] || []

        const isAllowed = allowedRoutes.some(route =>
            pathname.startsWith(route)
        )

        if (!isAllowed) {
            router.push(`/dashboard/${user.role}`)
        }

    }, [user, pathname, router])

    return <>{children}</>

}