<<<<<<< HEAD
import { apiRequest } from "./api"

export async function getDashboardStats() {

    return apiRequest("/analytics/dashboard")
=======
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
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044

}