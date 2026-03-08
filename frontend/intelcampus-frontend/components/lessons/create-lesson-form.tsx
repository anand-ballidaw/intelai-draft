"use client"

import { useState } from "react"
import { lessonService } from "@/services/lesson.service"
import { useToastStore } from "@/stores/toast.store"
import VideoUpload from "@/components/upload/video-upload"

interface Props {
    courseId: number
    onCreated?: () => void
}

export default function CreateLessonForm({
    courseId,
    onCreated,
}: Props) {

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const [title, setTitle] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            setLoading(true)

            await lessonService.createLesson({
                title,
                videoUrl,
                courseId,
            })

            addToast(
                "Lesson created successfully",
                "success"
            )

            setTitle("")
            setVideoUrl("")

            if (onCreated) {
                onCreated()
            }

        } catch {

            addToast(
                "Failed to create lesson",
                "error"
            )

        } finally {

            setLoading(false)

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 border rounded-xl p-6"
        >

            <h2 className="text-lg font-semibold">
                Create Lesson
            </h2>

            <input
                type="text"
                placeholder="Lesson title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                required
                className="w-full border rounded-md px-3 py-2"
            />

            <VideoUpload
                onUploaded={(url) =>
                    setVideoUrl(url)
                }
            />

            {videoUrl && (
                <p className="text-xs text-muted-foreground">
                    Uploaded: {videoUrl}
                </p>
            )}

            <button
                type="submit"
                disabled={loading || !videoUrl}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
                {loading ? "Creating..." : "Create Lesson"}
            </button>

        </form>
    )
}