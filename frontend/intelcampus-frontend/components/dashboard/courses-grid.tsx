"use client";

import { useCourseStore } from "@/stores/course.store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StatusBadge({
    status,
}: {
    status: "Active" | "Draft" | "Completed";
}) {
    const styles = {
        Active: "bg-green-100 text-green-700",
        Draft: "bg-yellow-100 text-yellow-700",
        Completed: "bg-gray-200 text-gray-700",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
        >
            {status}
        </span>
    );
}

export function CoursesGrid() {
    const courses = useCourseStore((state) => state.courses);

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
                <Card key={course.id}>
                    <CardHeader>
                        <CardTitle>{course.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Enrolled Students: {course.students}
                        </p>

                        <StatusBadge status={course.status} />

                        <div className="pt-2">
                            <button className="text-sm text-primary hover:underline">
                                View Details
                            </button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}