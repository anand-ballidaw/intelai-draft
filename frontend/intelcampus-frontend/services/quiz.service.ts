import { apiClient } from "@/lib/api/api-client"

export const quizService = {
    getQuiz: async (lessonId: string) => {
        const res = await apiClient.get(`/lessons/${lessonId}/quiz`)
        return res.data
    },

    submitQuiz: async (lessonId: string, answers: any) => {
        const res = await apiClient.post(
            `/lessons/${lessonId}/quiz/submit`,
            answers
        )

        return res.data
    },
}