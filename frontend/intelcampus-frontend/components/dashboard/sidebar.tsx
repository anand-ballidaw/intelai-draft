"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarItem {
    label: string
    href: string
}

interface SidebarProps {
    items?: SidebarItem[]
}

export default function Sidebar({ items = [] }: SidebarProps) {

    const pathname = usePathname()

    return (

        <aside className="w-64 bg-white border-r h-screen p-4">

            <h2 className="text-lg font-bold mb-6">
                IntelCampus
            </h2>

            <nav className="space-y-2">

                {items.map((item) => {

                    const active = pathname === item.href

                    return (

                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block p-2 rounded transition ${active
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            {item.label}
                        </Link>

                    )

                })}

            </nav>

        </aside>

    )

}