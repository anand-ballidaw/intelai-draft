"use client"

import { useState } from "react"
import { useParams } from "next/navigation"

interface Lesson {
    id: string
    title: string
}

export default function LessonsPage() {

    const params = useParams()

    const courseId = params.courseId

    const [lessons, setLessons] = useState<Lesson[]>([])

    const [title, setTitle] = useState("")

    const addLesson = () => {

        if (!title) return

        const lesson: Lesson = {
            id: crypto.randomUUID(),
            title
        }

        setLessons([...lessons, lesson])

        setTitle("")
    }

    return (

        <div className="space-y-6 max-w-2xl">

            <div>

                <h1 className="text-3xl font-bold">
                    Manage Lessons
                </h1>

                <p className="text-muted-foreground">
                    Course ID: {courseId}
                </p>

            </div>

            {/* ADD LESSON */}

            <div className="border rounded-lg p-6 space-y-4">

                <h2 className="text-lg font-semibold">
                    Add Lesson
                </h2>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Lesson title"
                    className="w-full border rounded-md px-3 py-2"
                />

                <button
                    onClick={addLesson}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Add Lesson
                </button>

            </div>

            {/* LESSON LIST */}

            <div className="border rounded-lg p-6">

                <h2 className="text-lg font-semibold mb-4">
                    Lessons
                </h2>

                {lessons.length === 0 && (

                    <p className="text-sm text-muted-foreground">
                        No lessons added yet.
                    </p>

                )}

                <ul className="space-y-2">

                    {lessons.map((lesson) => (

                        <li
                            key={lesson.id}
                            className="border rounded-md px-4 py-2"
                        >
                            {lesson.title}
                        </li>

                    ))}

                </ul>

            </div>

        </div>

    )

}