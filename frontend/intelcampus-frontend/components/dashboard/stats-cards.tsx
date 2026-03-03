"use client";

import { useCourseStore } from "@/stores/course.store";
import { Card, CardContent } from "@/components/ui/card";

export function StatsCards() {
    const courses = useCourseStore((state) => state.courses);

    const stats = [
        { title: "Total Students", value: "1,248" },
        { title: "Active Courses", value: courses.length.toString() },
        { title: "Average Rank", value: "Top 15%" },
        { title: "Completion Rate", value: "82%" },
    ];

    return (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}