import { apiClient } from "@/lib/api/api-client"

export interface CourseAnalytics {

    courseId: number
    totalStudents: number
    completedStudents: number
    averageProgress: number
    averageQuizScore: number

}

export const analyticsService = {

    async getCourseAnalytics(
        courseId: number
    ): Promise<CourseAnalytics> {

        const res = await apiClient.get(
            `/analytics/course/${courseId}`
        )

        return res.data

    }

}