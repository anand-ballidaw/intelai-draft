"use client"

import Link from "next/link"
import { SidebarEngine } from "@/core/permission/sidebar-engine"
import { Role } from "@/core/permission/role-permissions"

interface DynamicSidebarProps {
    role: Role
}

export default function DynamicSidebar({ role }: DynamicSidebarProps) {

    const items = SidebarEngine.getSidebarForRole(role)

    return (
        <div className="w-64 h-screen border-r bg-white">

            <div className="p-4 font-bold text-xl border-b">
                IntelCampus
            </div>

            <nav className="p-4 space-y-2">

                {items.map((item) => (

                    <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 rounded hover:bg-gray-100"
                    >
                        {item.label}
                    </Link>

                ))}

            </nav>

        </div>
    )
}