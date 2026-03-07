"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getAuthUser } from "@/lib/auth/auth-client"
import { navigationConfig } from "@/lib/navigation/navigation-config"

export default function Sidebar() {

    const pathname = usePathname()

    const user = getAuthUser()

    if (!user) {
        return null
    }

    const items = navigationConfig[user.role]

    return (

        <aside className="w-64 border-r bg-background h-screen p-6">

            <h2 className="text-xl font-semibold mb-8">
                IntelCampus
            </h2>

            <nav className="space-y-2">

                {items.map((item) => {

                    const active = pathname === item.href

                    return (

                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-3 py-2 rounded-md text-sm transition
                ${active
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
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