"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Student",
            message:
                "IntelCampus completely changed how I track my performance. The ranking system motivates me every day.",
        },
        {
            name: "Priya Menon",
            role: "School Coordinator",
            message:
                "The management dashboard gives us full visibility into student progress. Extremely powerful platform.",
        },
        {
            name: "Arjun Reddy",
            role: "Parent",
            message:
                "Finally a system where I can see my child’s growth clearly with real analytics.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-background">
            <div className="mx-auto max-w-6xl text-center">
                <FadeIn>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        What Our Users Say
                    </h2>
                </FadeIn>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <FadeIn key={item.name} delay={index * 0.15}>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        "{item.message}"
                                    </p>
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {item.role}
                                        </p>
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