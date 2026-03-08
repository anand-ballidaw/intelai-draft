import { apiClient } from "@/lib/api/api-client"

export interface Discussion {

    id: number

    authorName: string

    message: string

    createdAt: string

}

export interface CreateDiscussionRequest {

    courseId: number

    message: string

}

export const discussionService = {

    async getCourseDiscussions(
        courseId: number
    ): Promise<Discussion[]> {

        const res = await apiClient.get(
            `/courses/${courseId}/discussions`
        )

        return res.data

    },

    async createDiscussion(
        data: CreateDiscussionRequest
    ) {

        const res = await apiClient.post(
            `/courses/${data.courseId}/discussions`,
            data
        )

        return res.data

    }

}