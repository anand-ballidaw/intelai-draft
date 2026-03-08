import { apiClient } from "@/lib/api/api-client"

export interface Review {

    id: number

    studentName: string

    rating: number

    comment: string

    createdAt: string

}

export interface CreateReviewRequest {

    courseId: number

    rating: number

    comment: string

}

export const reviewService = {

    async getCourseReviews(
        courseId: number
    ): Promise<Review[]> {

        const res = await apiClient.get(
            `/courses/${courseId}/reviews`
        )

        return res.data

    },

    async createReview(
        data: CreateReviewRequest
    ) {

        const res = await apiClient.post(
            `/courses/${data.courseId}/reviews`,
            data
        )

        return res.data

    }

}