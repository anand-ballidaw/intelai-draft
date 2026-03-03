"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getAuthUser } from "@/lib/auth/auth-client"
import { navigationConfig } from "@/lib/navigation/navigation-config"
import { featureAccessMap } from "@/lib/subscription/subscription-config"

export default function Sidebar() {
    const pathname = usePathname()
    const user = getAuthUser()

    if (!user) return null

    const navItems = navigationConfig[user.role]

    return (
        <aside className="w-64 border-r bg-background min-h-screen p-6">
            <div className="mb-8">
                <h2 className="text-xl font-bold">IntelCampus</h2>
                <p className="text-sm text-muted-foreground mt-1 capitalize">
                    {user.role}
                </p>
            </div>

            <nav className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    const featureConfig = featureAccessMap[item.href]
                    const isLocked =
                        featureConfig?.requirePro && !user.subscriptionActive

                    return (
                        <Link
                            key={item.href}
                            href={isLocked ? "/pricing" : item.href}
                            className={`flex justify-between items-center rounded-md px-3 py-2 text-sm transition ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
                                }`}
                        >
                            <span>{item.title}</span>
                            {isLocked && (
                                <span className="text-xs text-muted-foreground">
                                    🔒
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}