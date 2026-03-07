"use client"

import { useState } from "react"
import RatingStars from "@/components/reviews/rating-stars"
import { reviewService } from "@/services/review.service"
import { useToastStore } from "@/stores/toast.store"

interface Props {
    courseId: number
    onSubmitted?: () => void
}

export default function ReviewForm({
    courseId,
    onSubmitted,
}: Props) {

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const [rating, setRating] = useState(0)

    const [comment, setComment] =
        useState("")

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            await reviewService.createReview({
                courseId,
                rating,
                comment,
            })

            addToast(
                "Review submitted",
                "success"
            )

            setRating(0)
            setComment("")

            if (onSubmitted) {
                onSubmitted()
            }

        } catch {

            addToast(
                "Failed to submit review",
                "error"
            )

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border rounded-xl p-6 space-y-4"
        >

            <h2 className="text-lg font-semibold">
                Leave a Review
            </h2>

            <RatingStars
                rating={rating}
                onChange={setRating}
            />

            <textarea
                placeholder="Write your review..."
                value={comment}
                onChange={(e) =>
                    setComment(e.target.value)
                }
                className="w-full border rounded-md p-3"
            />

            <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
                Submit Review
            </button>

        </form>

    )
}