"use client"

import Link from "next/link"
import { getSidebarItems } from "@/core/permission/sidebar-engine"
import { useAuthStore } from "@/stores/auth-store"

export default function Sidebar() {

    const user = useAuthStore((state) => state.user)

    if (!user) return null

    const items = getSidebarItems(user.role)

    return (

        <aside className="w-64 h-screen border-r bg-white p-4">

            <h2 className="text-xl font-bold mb-6">
                IntelCampus
            </h2>

            <nav className="flex flex-col gap-2">

                {items.map(item => (

                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 rounded hover:bg-gray-100"
                    >
                        {item.label}
                    </Link>

                ))}

            </nav>

        </aside>

    )

}