"use client"

import { useState } from "react"
import { discussionService } from "@/services/discussion.service"
import { useToastStore } from "@/stores/toast.store"

interface Props {
    courseId: number
    onSubmitted?: () => void
}

export default function DiscussionForm({
    courseId,
    onSubmitted,
}: Props) {

    const [message, setMessage] = useState("")

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            await discussionService.createDiscussion({
                courseId,
                message,
            })

            addToast(
                "Message posted",
                "success"
            )

            setMessage("")

            if (onSubmitted) {
                onSubmitted()
            }

        } catch {

            addToast(
                "Failed to post message",
                "error"
            )

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border rounded-xl p-4 space-y-3"
        >

            <textarea
                placeholder="Ask a question or start a discussion..."
                value={message}
                onChange={(e) =>
                    setMessage(e.target.value)
                }
                className="w-full border rounded-md p-3 text-sm"
            />

            <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
                Post
            </button>

        </form>

    )
}