"use client"

import { useParams } from "next/navigation"

export default function LessonPlayerPage() {

    const params = useParams()

    const courseId = params.courseId
    const lessonId = params.lessonId

    return (

        <div className="max-w-5xl mx-auto space-y-6">

            <div>

                <h1 className="text-3xl font-bold">
                    Lesson Player
                </h1>

                <p className="text-sm text-muted-foreground">
                    Course ID: {courseId} | Lesson ID: {lessonId}
                </p>

            </div>

            {/* VIDEO PLAYER */}

            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">

                <video
                    controls
                    className="w-full h-full"
                >

                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.

                </video>

            </div>

            {/* LESSON INFO */}

            <div className="border rounded-lg p-6 space-y-4">

                <h2 className="text-xl font-semibold">
                    Lesson Title
                </h2>

                <p className="text-muted-foreground">
                    This is a demo lesson description. In the real IntelCampus
                    platform this will show the lesson content, resources,
                    attachments and instructions for students.
                </p>

            </div>

        </div>

    )

}