"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-store"

export function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const { user } = useAuthStore()

    useEffect(() => {

        console.log("AuthProvider initialized", user)

    }, [user])

    return <>{children}</>
}