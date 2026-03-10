export const subscriptionService = {

    async getPlans() {

        return [
            {
                id: "basic",
                name: "Basic",
                price: 0
            },
            {
                id: "pro",
                name: "Pro",
                price: 29
            },
            {
                id: "enterprise",
                name: "Enterprise",
                price: 99
            }
        ]

    },

    async getCurrentPlan() {

        return {
            id: "basic",
            name: "Basic",
            price: 0
        }

    },

    async upgradePlan(planId: string) {

        return {
            success: true,
            planId
        }

    },

    async createCheckoutSession(data: { plan: string }) {

        return {
            checkoutUrl: "/dashboard"
        }

    }

}