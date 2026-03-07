"use client"

import { useLessonProgressStore } from "@/stores/lesson-progress.store"

interface ProgressProps {
    lessonKey: string
}

export default function LessonProgress({ lessonKey }: ProgressProps) {
    const markComplete = useLessonProgressStore((s) => s.markComplete)
    const completed = useLessonProgressStore(
        (s) => s.completedLessons[lessonKey]
    )

    if (completed) {
        return (
            <p className="text-green-600 font-medium">
                Lesson Completed ✓
            </p>
        )
    }

    return (
        <button
            onClick={() => markComplete(lessonKey)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
            Mark Lesson Complete
        </button>
    )
}