"use client"

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

    )

}