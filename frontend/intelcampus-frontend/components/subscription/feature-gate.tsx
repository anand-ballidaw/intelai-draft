"use client"

import { ReactNode } from "react"
import { getAuthUser } from "@/lib/auth/auth-client"
import { featureAccessMap } from "@/lib/subscription/subscription-config"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function FeatureGate({
    children,
}: {
    children: ReactNode
}) {
    const pathname = usePathname()
    const user = getAuthUser()

    if (!user) return null

    const featureConfig = featureAccessMap[pathname]

    if (featureConfig?.requirePro && !user.subscriptionActive) {
        return (
            <div className="p-8 border rounded-lg bg-muted text-center">
                <h2 className="text-xl font-semibold mb-4">
                    Upgrade Required
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                    This feature is available only for Pro subscribers.
                </p>
                <Link
                    href="/pricing"
                    className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                    Upgrade to Pro
                </Link>
            </div>
        )
    }

    return <>{children}</>
}