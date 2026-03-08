"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {
    isAuthenticated,
    hasRole,
    hasActiveSubscription,
    UserRole,
} from "@/lib/auth/auth-client"

interface ProtectedRouteProps {
    children: React.ReactNode
    requiredRole?: UserRole
    requireSubscription?: boolean
}

export default function ProtectedRoute({
    children,
    requiredRole,
    requireSubscription,
}: ProtectedRouteProps) {

    const router = useRouter()

    useEffect(() => {

        if (!isAuthenticated()) {
            router.replace("/signin")
            return
        }

        if (requiredRole && !hasRole(requiredRole)) {
            router.replace("/dashboard")
            return
        }

        if (requireSubscription && !hasActiveSubscription()) {
            router.replace("/pricing")
            return
        }

    }, [requiredRole, requireSubscription, router])

    return <>{children}</>
}