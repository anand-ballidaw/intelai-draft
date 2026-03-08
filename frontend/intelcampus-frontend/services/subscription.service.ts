import { apiClient } from "@/lib/api/api-client"

export const subscriptionService = {
    getPlans: async () => {
        const res = await apiClient.get("/subscriptions/plans")
        return res.data
    },

    getCurrentPlan: async () => {
        const res = await apiClient.get("/subscriptions/current")
        return res.data
    },

    upgradePlan: async (planId: string) => {
        const res = await apiClient.post("/subscriptions/upgrade", {
            planId,
        })

        return res.data
    },
}