"use client"

import PlanCard from "./plan-card"

const plans = [
    {
        name: "Free",
        price: "₹0",
        features: [
            "Access free courses",
            "Basic dashboard",
            "Community support",
        ],
        current: true,
    },
    {
        name: "Pro",
        price: "₹499 / month",
        features: [
            "All premium courses",
            "Certificates",
            "Progress tracking",
            "Priority support",
        ],
    },
    {
        name: "Enterprise",
        price: "₹1999 / month",
        features: [
            "Team management",
            "Advanced analytics",
            "Dedicated support",
        ],
    },
]

export default function PlanGrid() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {plans.map((plan) => (
                <PlanCard
                    key={plan.name}
                    name={plan.name}
                    price={plan.price}
                    features={plan.features}
                    current={plan.current}
                />
            ))}
        </div>
    )
}