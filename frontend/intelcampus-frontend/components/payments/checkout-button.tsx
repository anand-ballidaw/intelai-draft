"use client"

import { loadRazorpay } from "@/lib/payments/razorpay-loader"
import { paymentService } from "@/services/payment.service"
import { useToastStore } from "@/stores/toast.store"
import { getAuthUser } from "@/lib/auth/auth-client"
import { useState } from "react"

interface Props {
    planId: string
    amount: number
}

export default function CheckoutButton({
    planId,
    amount,
}: Props) {

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const [loading, setLoading] = useState(false)

    const handleCheckout = async () => {

        setLoading(true)

        const loaded =
            await loadRazorpay()

        if (!loaded) {

            addToast(
                "Payment system failed to load",
                "error"
            )

            setLoading(false)

            return
        }

        try {

            const order =
                await paymentService.createOrder(planId)

            const user = getAuthUser()

            const razorpayKey =
                process.env.NEXT_PUBLIC_RAZORPAY_KEY

            if (!razorpayKey) {

                addToast(
                    "Payment key not configured",
                    "error"
                )

                setLoading(false)

                return
            }

            const options: any = {

                key: razorpayKey,

                amount: order.amount,

                currency: order.currency,

                order_id: order.id,

                name: "IntelCampus",

                description:
                    "Subscription Payment",

                prefill: {
                    name: user?.name,
                    email: user?.email,
                },

                handler: async (response: any) => {

                    await paymentService.verifyPayment(
                        response
                    )

                    addToast(
                        "Payment successful",
                        "success"
                    )

                },

                theme: {
                    color: "#6366f1",
                },

            }

            const razorpay =
                new (window as any).Razorpay(
                    options
                )

            razorpay.open()

        } catch {

            addToast(
                "Payment failed",
                "error"
            )

        } finally {

            setLoading(false)

        }

    }

    return (

        <button
            onClick={handleCheckout}
            disabled={loading}
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
        >
            {loading
                ? "Processing..."
                : `Subscribe ₹${amount}`}
        </button>

    )
}