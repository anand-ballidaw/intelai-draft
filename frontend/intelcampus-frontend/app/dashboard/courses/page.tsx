"use client";

import { useState } from "react";
import { useCourseStore } from "@/stores/course.store";
import { useAuthStore } from "@/stores/auth.store";
import { CoursesGrid } from "@/components/dashboard/courses-grid";

export default function CoursesPage() {
    const addCourse = useCourseStore((state) => state.addCourse);
    const role = useAuthStore((state) => state.role);

    const [courseName, setCourseName] = useState("");

    const handleCreate = () => {
        if (!courseName.trim()) return;

        addCourse({
            name: courseName,
            students: 0,
            status: "Draft",
        });

        setCourseName("");
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Courses</h1>
                    <p className="mt-2 text-muted-foreground">
                        Manage and monitor your active courses.
                    </p>
                </div>

                {role === "MANAGEMENT" && (
                    <div className="flex gap-3">
                        <input
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            placeholder="Course name..."
                            className="rounded-md border px-3 py-2 text-sm"
                        />
                        <button
                            onClick={handleCreate}
                            className="rounded-md bg-primary px-4 py-2 text-sm text-white"
                        >
                            Create
                        </button>
                    </div>
                )}
            </div>

            <CoursesGrid />
        </div>
    );
}