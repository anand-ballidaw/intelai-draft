"use client"

<<<<<<< HEAD
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
=======
import { ReactNode } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import ProtectedRoute from "@/components/auth/protected-route"

interface DashboardLayoutProps {
    children: ReactNode
}

export default function DashboardLayout({
    children
}: DashboardLayoutProps) {

    return (

        <ProtectedRoute>

            <div className="flex h-screen w-full">

                {/* SIDEBAR */}

                <Sidebar />

                {/* MAIN CONTENT */}

                <div className="flex flex-col flex-1">

                    <Topbar />

                    <main className="flex-1 overflow-y-auto p-6">

                        {children}

                    </main>

                </div>

            </div>

        </ProtectedRoute>

>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
    )

}