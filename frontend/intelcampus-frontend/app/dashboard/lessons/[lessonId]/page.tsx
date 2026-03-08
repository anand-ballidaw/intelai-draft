"use client"

import { useEffect, useState } from "react"
import { lessonService, Lesson } from "@/services/lesson.service"
import { useProgressStore } from "@/stores/progress.store"

interface LessonPageProps {
    params: {
        lessonId: string
    }
}

export default function LessonPage({
    params,
}: LessonPageProps) {

    const [lesson, setLesson] = useState<Lesson | null>(null)

    const markCompleted = useProgressStore(
        (s) => s.markCompleted
    )

    useEffect(() => {

        const loadLesson = async () => {

            try {

                const data = await lessonService.getLesson(
                    params.lessonId
                )

                setLesson(data)

            } catch (err) {

                console.error("Failed to load lesson", err)

            }

        }

        loadLesson()

    }, [params.lessonId])

    if (!lesson) {
        return <p>Loading lesson...</p>
    }

    const handleComplete = () => {

        markCompleted(
            "course-react-demo",
            params.lessonId
        )

    }

    return (

        <div className="space-y-6">

            <h1 className="text-xl font-semibold">
                {lesson.title}
            </h1>

            <video
                controls
                className="w-full rounded-md border"
                src={lesson.videoUrl}
            />

            <button
                onClick={handleComplete}
                className="px-6 py-2 bg-green-600 text-white rounded-md"
            >
                Mark Lesson Complete
            </button>

        </div>
    )
}