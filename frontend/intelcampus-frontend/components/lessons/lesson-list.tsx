"use client"

import { useEffect, useState } from "react"
import { lessonService, Lesson } from "@/services/lesson.service"
import { useRouter } from "next/navigation"

interface LessonListProps {
    courseId: string
}

export default function LessonList({
    courseId,
}: LessonListProps) {

    const router = useRouter()

    const [lessons, setLessons] = useState<Lesson[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadLessons = async () => {

            try {

                const data = await lessonService.getLessons(courseId)

                setLessons(data)

            } catch (err) {

                console.error("Failed to load lessons", err)

            } finally {

                setLoading(false)

            }

        }

        loadLessons()

    }, [courseId])

    if (loading) {
        return (
            <p className="text-sm text-muted-foreground">
                Loading lessons...
            </p>
        )
    }

    return (

        <div className="space-y-2">

            {lessons.map((lesson) => (

                <div
                    key={lesson.id}
                    className="border rounded-md p-4 flex justify-between items-center"
                >

                    <div>
                        <p className="font-medium">
                            {lesson.title}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Duration: {lesson.duration}s
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            router.push(
                                `/dashboard/lessons/${lesson.id}`
                            )
                        }
                        className="px-4 py-1 text-sm bg-primary text-primary-foreground rounded-md"
                    >
                        Watch
                    </button>

                </div>

            ))}

        </div>

    )
}