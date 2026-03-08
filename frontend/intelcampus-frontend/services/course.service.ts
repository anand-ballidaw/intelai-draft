import { apiClient } from "@/lib/api/api-client"

export interface Course {
    id: number
    title: string
    description?: string
    instructor: string
    students: number
}

export const courseService = {

    async getCourses(): Promise<Course[]> {

        const res = await apiClient.get("/courses")

        return res.data
    },

    async getCourse(courseId: string): Promise<Course> {

        const res = await apiClient.get(`/courses/${courseId}`)

        return res.data
    },

    async createCourse(data: any) {

        const res = await apiClient.post(
            "/courses",
            data
        )

        return res.data
    }

}