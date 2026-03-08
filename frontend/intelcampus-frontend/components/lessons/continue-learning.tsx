"use client"

import Link from "next/link"
import { useLessonProgressStore } from "@/stores/lesson-progress.store"

interface ContinueProps {
    courseId: string
}

export default function ContinueLearning({ courseId }: ContinueProps) {
    const lastLesson = useLessonProgressStore(
        (s) => s.lastLesson[courseId]
    )

    if (!lastLesson) {
        return (
            <Link
                href={`/dashboard/courses/${courseId}/lessons/1`}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
                Start Course
            </Link>
        )
    }

    return (
        <Link
            href={`/dashboard/courses/${courseId}/lessons/${lastLesson}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
            Continue Lesson {lastLesson}
        </Link>
    )
}