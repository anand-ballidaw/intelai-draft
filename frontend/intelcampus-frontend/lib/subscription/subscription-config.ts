export type SubscriptionTier = "free" | "pro"

export interface FeatureAccess {
    requirePro?: boolean
}

export const featureAccessMap: Record<string, FeatureAccess> = {
    "/dashboard/courses": { requirePro: true },
    "/dashboard/progress": { requirePro: true },
    "/dashboard/manage-courses": { requirePro: true },
    "/dashboard/students": { requirePro: true },
}