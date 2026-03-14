"use client"

import { ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuthStore } from "@/stores/auth-store"
import { hasPermission } from "@/services/permission.service"
import { normalizeRole } from "@/types/role"

interface Props {
    children: ReactNode
}

export default function RouteGuard({ children }: Props) {

    const router = useRouter()
    const pathname = usePathname()

    const { user } = useAuthStore()

    if (!user) {

        router.push("/signin")
        return null

    }

    const role = normalizeRole(user.role)

    const allowed = hasPermission(role, pathname)

    if (!allowed) {

        return (
            <div className="p-6 text-red-500">
                You do not have permission to access this page.
            </div>
        )

    }

    return <>{children}</>

}