import { apiClient } from "@/lib/api/api-client"

export interface Lesson {
    id: number
    title: string
    videoUrl: string
    duration?: number
    courseId: number
}

export interface CreateLessonRequest {
    title: string
    videoUrl: string
    courseId: number
}

export const lessonService = {

    async getLessons(courseId: string): Promise<Lesson[]> {

        const res = await apiClient.get(
            `/courses/${courseId}/lessons`
        )

        return res.data
    },

    async getLesson(lessonId: string): Promise<Lesson> {

        const res = await apiClient.get(
            `/lessons/${lessonId}`
        )

        return res.data
    },

    async createLesson(data: CreateLessonRequest) {

        const res = await apiClient.post(
            "/lessons",
            data
        )

        return res.data
    },

    async deleteLesson(lessonId: number) {

        const res = await apiClient.delete(
            `/lessons/${lessonId}`
        )

        return res.data
    }

}