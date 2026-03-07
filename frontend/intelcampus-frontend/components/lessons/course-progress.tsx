"use client"

import { useLessonProgressStore } from "@/stores/lesson-progress.store"

const totalLessons = 4

export default function CourseProgress() {
    const completedLessons = useLessonProgressStore(
        (s) => s.completedLessons
    )

    const completedCount = Object.keys(completedLessons).length

    const percentage = Math.round(
        (completedCount / totalLessons) * 100
    )

    return (
        <div className="space-y-2">
            <p className="text-sm">
                Course Progress: {percentage}%
            </p>

            <div className="w-full h-2 bg-muted rounded">
                <div
                    className="h-2 bg-primary rounded"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}