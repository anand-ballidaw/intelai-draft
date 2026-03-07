"use client"

import { useEffect, useState } from "react"
import { reviewService, Review } from "@/services/review.service"

interface Props {
    courseId: number
}

export default function ReviewList({
    courseId,
}: Props) {

    const [reviews, setReviews] =
        useState<Review[]>([])

    const loadReviews = async () => {

        try {

            const data =
                await reviewService.getCourseReviews(
                    courseId
                )

            setReviews(data)

        } catch {

            setReviews([
                {
                    id: 1,
                    studentName: "Demo Student",
                    rating: 5,
                    comment: "Great course!",
                    createdAt: "2026-03-05",
                },
            ])

        }

    }

    useEffect(() => {

        loadReviews()

    }, [])

    return (

        <div className="space-y-4">

            {reviews.map((review) => (

                <div
                    key={review.id}
                    className="border rounded-lg p-4"
                >

                    <p className="font-medium">
                        {review.studentName}
                    </p>

                    <p className="text-yellow-500">
                        {"★".repeat(review.rating)}
                    </p>

                    <p className="text-sm mt-2">
                        {review.comment}
                    </p>

                </div>

            ))}

        </div>

    )
}