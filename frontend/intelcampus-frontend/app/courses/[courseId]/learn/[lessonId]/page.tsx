"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

const lessons = [
    { id: "1", title: "Introduction" },
    { id: "2", title: "What is Artificial Intelligence" },
    { id: "3", title: "Machine Learning Basics" },
]

export default function CoursePlayerPage() {

    const params = useParams()

    const courseId = params.courseId as string
    const lessonId = params.lessonId as string

    const [completedLessons, setCompletedLessons] = useState<string[]>([])

    const storageKey = `intelcampus_progress_${courseId}`

    useEffect(() => {

        const saved = localStorage.getItem(storageKey)

        if (saved) {

            setCompletedLessons(JSON.parse(saved))

        }

    }, [courseId])

    const markComplete = () => {

        if (completedLessons.includes(lessonId)) return

        const updated = [...completedLessons, lessonId]

        setCompletedLessons(updated)

        localStorage.setItem(
            storageKey,
            JSON.stringify(updated)
        )

    }

    const progress =
        (completedLessons.length / lessons.length) * 100

    const currentLesson = lessons.find(
        (l) => l.id === lessonId
    )

    return (

        <div className="flex h-screen">

            {/* LESSON SIDEBAR */}

            <div className="w-72 border-r overflow-y-auto p-4">

                <h2 className="text-lg font-semibold mb-4">
                    Course Lessons
                </h2>

                <ul className="space-y-2">

                    {lessons.map((lesson) => (

                        <li key={lesson.id}>

                            <Link
                                href={`/courses/${courseId}/learn/${lesson.id}`}
                                className={`block px-3 py-2 rounded-md text-sm ${lesson.id === lessonId
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                    }`}
                            >

                                {lesson.title}

                                {completedLessons.includes(lesson.id) && (
                                    <span className="ml-2 text-green-500">
                                        ✔
                                    </span>
                                )}

                            </Link>

                        </li>

                    ))}

                </ul>

                {/* PROGRESS BAR */}

                <div className="mt-6">

                    <p className="text-sm mb-2">
                        Progress: {Math.round(progress)}%
                    </p>

                    <div className="w-full bg-muted rounded-full h-2">

                        <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        />

                    </div>

                </div>

            </div>

            {/* VIDEO PLAYER */}

            <div className="flex-1 flex flex-col">

                <div className="aspect-video bg-black">

                    <video
                        controls
                        className="w-full h-full"
                    >

                        <source
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            type="video/mp4"
                        />

                    </video>

                </div>

                {/* LESSON INFO */}

                <div className="p-6 space-y-4">

                    <h1 className="text-2xl font-bold">
                        {currentLesson?.title}
                    </h1>

                    <p className="text-muted-foreground">
                        This lesson explains the fundamentals of the topic.
                    </p>

                    <button
                        onClick={markComplete}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                    >
                        Mark as Completed
                    </button>

                </div>

            </div>

        </div>

    )

}