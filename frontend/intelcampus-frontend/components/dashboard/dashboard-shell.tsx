"use client"

import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"

export default function DashboardShell({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="flex-1 p-8">{children}</main>
            </div>
        </div>
    )
}