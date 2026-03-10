"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"
import { useAuthStore } from "@/stores/auth-store"

interface Props {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {

    const user = useAuthStore((state) => state.user)

    return (

        <div className="flex h-screen">

            <Sidebar role={user?.role || "student"} />

            <div className="flex flex-col flex-1">

                <Navbar />

                <main className="flex-1 p-6 bg-gray-50">
                    {children}
                </main>

            </div>

        </div>

    )

}