"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { subscriptionService } from "@/services/subscription.service";

export function PricingSection() {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

    const plans = [
        {
            name: "Basic",
            price: "₹499",
            description: "For individual learners",
            features: ["Access to Courses", "Rank Tracking", "Basic Analytics"],
            popular: false,
        },
        {
            name: "Pro",
            price: "₹999",
            description: "For advanced students",
            features: [
                "All Basic Features",
                "Advanced Analytics",
                "Priority Support",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For schools & institutions",
            features: [
                "Management Dashboard",
                "Student Performance Tracking",
                "Dedicated Support",
            ],
            popular: false,
        },
    ];

    const handleSubscribe = async (plan: string) => {
        setLoadingPlan(plan);

        const response = await subscriptionService.createCheckoutSession({
            plan,
        });

        window.location.href = response.checkoutUrl;
    };

    return (
        <section className="py-20 px-6 bg-muted/30">
            <div className="mx-auto max-w-6xl text-center">
                <FadeIn>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Simple & Transparent Pricing
                    </h2>
                </FadeIn>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <FadeIn key={plan.name} delay={index * 0.15}>
                            <Card
                                className={`relative flex flex-col transition-transform duration-300 ${plan.popular
                                        ? "border-primary scale-105 shadow-lg"
                                        : "hover:scale-105"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <CardHeader>
                                    <CardTitle>{plan.name}</CardTitle>
                                </CardHeader>

                                <CardContent className="flex flex-1 flex-col space-y-4">
                                    <p className="text-2xl font-semibold">{plan.price}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {plan.description}
                                    </p>

                                    <ul className="space-y-2 text-sm text-left">
                                        {plan.features.map((feature) => (
                                            <li key={feature}>• {feature}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-6">
                                        <Button
                                            className="w-full"
                                            variant={plan.popular ? "default" : "outline"}
                                            onClick={() => handleSubscribe(plan.name)}
                                            disabled={loadingPlan === plan.name}
                                        >
                                            {loadingPlan === plan.name
                                                ? "Processing..."
                                                : "Subscribe"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}