"use client"

import { useEffect } from "react"
<<<<<<< HEAD
import { useAuthStore } from "@/stores/auth-store"
=======
import { authService } from "@/services/auth.service"
import { useAuthStore } from "@/stores/auth.store"
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

export function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {

<<<<<<< HEAD
    const { user } = useAuthStore()

    useEffect(() => {

        console.log("AuthProvider initialized", user)

    }, [user])
=======
    const setAuthenticated = useAuthStore(
        (state) => state.setAuthenticated
    )

    useEffect(() => {

        const verifySession = async () => {

            try {

                await authService.getCurrentUser()

                setAuthenticated(true)

            } catch {

                setAuthenticated(false)

            }

        }

        verifySession()

    }, [setAuthenticated])
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

    return <>{children}</>
}