"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuthStore } from "@/stores/auth-store"
import { hasPermission } from "@/lib/auth/check-permission"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {

    const router = useRouter()
    const pathname = usePathname()

    const user = useAuthStore((state) => state.user)

    useEffect(() => {

        if (!user) {
            router.push("/signin")
            return
        }

        const allowed = hasPermission(user.role, pathname)

        if (!allowed) {
            router.push("/dashboard")
        }

    }, [user, pathname, router])

    return (
        <div>
            {children}
        </div>
    )

}