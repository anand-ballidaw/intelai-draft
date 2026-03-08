"use client"

import { useEffect, useState } from "react"
import { discussionService, Discussion } from "@/services/discussion.service"
import DiscussionMessage from "@/components/discussion/discussion-message"

interface Props {
    courseId: number
}

export default function DiscussionList({
    courseId,
}: Props) {

    const [discussions, setDiscussions] =
        useState<Discussion[]>([])

    const loadDiscussions = async () => {

        try {

            const data =
                await discussionService.getCourseDiscussions(
                    courseId
                )

            setDiscussions(data)

        } catch {

            setDiscussions([
                {
                    id: 1,
                    authorName: "Demo Student",
                    message: "Is there any assignment for lesson 3?",
                    createdAt: "2026-03-05",
                },
            ])

        }

    }

    useEffect(() => {

        loadDiscussions()

    }, [])

    return (

        <div className="space-y-4">

            {discussions.map((d) => (

                <DiscussionMessage
                    key={d.id}
                    author={d.authorName}
                    message={d.message}
                    createdAt={d.createdAt}
                />

            ))}

        </div>

    )
}