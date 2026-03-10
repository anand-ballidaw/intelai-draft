"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { useAuthStore } from "@/stores/auth.store"

interface Props {
    children: ReactNode
}

const featureAccessMap: Record<
    string,
    { requirePro?: boolean }
> = {
    "/dashboard/analytics": { requirePro: true },
    "/dashboard/marketing": { requirePro: true },
}

export default function FeatureGate({ children }: Props) {

    const pathname = usePathname()

    const user = useAuthStore((state) => state.user)

    const featureConfig = featureAccessMap[pathname]

    const subscriptionActive =
        (user as any)?.subscriptionActive ?? false

    if (featureConfig?.requirePro && !subscriptionActive) {

        return (

            <div className="p-8 border rounded-lg bg-muted text-center">

                <h2 className="text-xl font-semibold mb-4">
                    Pro Feature
                </h2>

                <p className="text-gray-600">
                    This feature requires a Pro subscription.
                </p>

            </div>

        )

    }

    return <>{children}</>

}