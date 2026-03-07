"use client"

import { useEffect, useState } from "react"
import { lessonService, Lesson } from "@/services/lesson.service"
import CreateLessonForm from "@/components/lessons/create-lesson-form"
import ProtectedRoute from "@/components/auth/protected-route"
import DiscussionForm from "@/components/discussion/discussion-form"
import DiscussionList from "@/components/discussion/discussion-list"

interface Props {
    params: {
        courseId: string
    }
}

export default function ManageLessonsPage({
    params,
}: Props) {

    const courseId = Number(params.courseId)

    const [lessons, setLessons] =
        useState<Lesson[]>([])

    const loadLessons = async () => {

        try {

            const data =
                await lessonService.getLessons(
                    params.courseId
                )

            setLessons(data)

        } catch (err) {

            console.error(err)

        }

    }

    useEffect(() => {

        loadLessons()

    }, [])

    return (

        <ProtectedRoute requiredRole="INSTRUCTOR">

            <div className="space-y-10">

                <div>

                    <h1 className="text-2xl font-semibold">
                        Manage Lessons
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Add and manage lessons for this course.
                    </p>

                </div>

                <CreateLessonForm
                    courseId={courseId}
                    onCreated={loadLessons}
                />

                <div className="border rounded-xl p-6 space-y-4">

                    <h2 className="text-lg font-semibold">
                        Lessons
                    </h2>

                    {lessons.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                            No lessons created yet.
                        </p>
                    )}

                    {lessons.map((lesson) => (

                        <div
                            key={lesson.id}
                            className="flex items-center justify-between border p-4 rounded-md"
                        >

                            <div>

                                <p className="font-medium">
                                    {lesson.title}
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Video: {lesson.videoUrl}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Discussion Section */}

                <div className="space-y-6">

                    <h2 className="text-lg font-semibold">
                        Course Discussion
                    </h2>

                    <DiscussionForm
                        courseId={courseId}
                    />

                    <DiscussionList
                        courseId={courseId}
                    />

                </div>

            </div>

        </ProtectedRoute>

    )
}