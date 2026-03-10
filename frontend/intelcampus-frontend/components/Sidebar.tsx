"use client"

import Link from "next/link"

export interface SidebarProps {
    role: string
}

const links = [

    { label: "Dashboard", href: "/dashboard" },
    { label: "Courses", href: "/dashboard/courses" },
    { label: "SmartClass", href: "/smartclass" },
    { label: "Assignments", href: "/dashboard/assignments" },
    { label: "Finance", href: "/dashboard/finance" },
    { label: "Transport", href: "/transport/routes" }

]

export default function Sidebar({ role }: SidebarProps) {

    return (

        <aside className="w-64 bg-white border-r h-screen p-4">

            <h2 className="text-lg font-bold mb-6">
                IntelCampus
            </h2>

            <nav className="space-y-2">

                {links.map((link) => (

                    <Link
                        key={link.href}
                        href={link.href}
                        className="block p-2 rounded hover:bg-gray-100"
                    >
                        {link.label}
                    </Link>

                ))}

            </nav>

        </aside>

    )

}