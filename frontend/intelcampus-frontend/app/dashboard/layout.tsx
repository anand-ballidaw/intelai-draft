import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

interface Props {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Navbar />

                <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}