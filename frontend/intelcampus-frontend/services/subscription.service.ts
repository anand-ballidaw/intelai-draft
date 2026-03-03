export interface SubscribeRequest {
    plan: string;
}

export interface PaymentResponse {
    checkoutUrl: string;
}

const simulateDelay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const subscriptionService = {
    async createCheckoutSession(
        data: SubscribeRequest
    ): Promise<PaymentResponse> {
        await simulateDelay(1000);

        // 🔁 In future this will call backend:
        // return api.post("/payments/checkout", data);

        return {
            checkoutUrl: `/checkout-success?plan=${data.plan}`,
        };
    },
};