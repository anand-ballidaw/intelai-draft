"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
    return (
        <section className="relative py-24 px-6 text-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
                <FadeIn>
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                        Transform Learning with
                        <span className="block text-primary">
                            Intelligent Ranking & Analytics
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="mt-6 text-muted-foreground text-base sm:text-lg">
                        IntelCampus empowers students and institutions with real-time
                        performance tracking, smart ranking systems, and actionable
                        insights.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/register">
                            <Button size="lg">Start Free Trial</Button>
                        </Link>
                        <Link href="/signin">
                            <Button size="lg" variant="outline">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}