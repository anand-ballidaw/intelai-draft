import Sidebar from "@/components/layout/sidebar"
import Topbar from "@/components/layout/topbar"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 flex flex-col min-h-screen">

                <Topbar />

                <main className="p-6 bg-gray-50 flex-1">
                    {children}
                </main>

            </div>

        </div>

    )

}