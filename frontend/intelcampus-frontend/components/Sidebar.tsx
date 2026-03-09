"use client"

import Link from "next/link"
import { roleNavigation } from "../config/roleNavigation"

interface SidebarProps {
    role: string
}

export default function Sidebar({ role }: SidebarProps) {

    const items = roleNavigation[role] || []

    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4">

            <h2 className="text-xl font-bold mb-6">
                IntelCampus
            </h2>

            <ul className="space-y-3">

                {items.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.path}
                            className="block p-2 rounded hover:bg-gray-700"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}