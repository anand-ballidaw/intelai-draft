"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CheckoutSuccessClient() {
    const params = useSearchParams();
    const plan = params.get("plan");

    return (
        <div className="flex min-h-screen items-center justify-center px-6">
            <div className="max-w-md text-center space-y-6">
                <h1 className="text-2xl font-bold">
                    🎉 Subscription Successful
                </h1>

                <p className="text-muted-foreground">
                    You have successfully subscribed to the{" "}
                    <span className="font-semibold">{plan}</span> plan.
                </p>

                <Link href="/dashboard">
                    <Button className="w-full">Go to Dashboard</Button>
                </Link>
            </div>
        </div>
    );
}