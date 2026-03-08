"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {

    const pathname = usePathname()

    return (

        <aside className="w-64 border-r bg-background">

            <div className="p-6 border-b">

                <h2 className="text-xl font-bold">
                    IntelCampus
                </h2>

            </div>

            <nav className="p-4 space-y-2">

                <Link
                    href="/dashboard/student"
                    className="block px-3 py-2 rounded hover:bg-muted"
                >
                    Dashboard
                </Link>

                <Link
                    href="/people/students"
                    className="block px-3 py-2 rounded hover:bg-muted"
                >
                    Students
                </Link>

                <Link
                    href="/academics/attendance"
                    className="block px-3 py-2 rounded hover:bg-muted"
                >
                    Attendance
                </Link>

                <Link
                    href="/communication/announcements"
                    className="block px-3 py-2 rounded hover:bg-muted"
                >
                    Announcements
                </Link>

            </nav>

        </aside>

    )

}