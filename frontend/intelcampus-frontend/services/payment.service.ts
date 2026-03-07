import { apiClient } from "@/lib/api/api-client"

export interface RazorpayOrder {

    id: string

    amount: number

    currency: string

}

export const paymentService = {

    async createOrder(planId: string) {

        const res = await apiClient.post(
            "/payments/create-order",
            { planId }
        )

        return res.data as RazorpayOrder
    },

    async verifyPayment(data: any) {

        const res = await apiClient.post(
            "/payments/verify",
            data
        )

        return res.data
    }

}