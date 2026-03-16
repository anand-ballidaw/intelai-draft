import { apiService } from "@/services/api.service"

import {
    Course,
    CreateCourseDTO,
    UpdateCourseDTO
} from "../types/smartclass.types"

class SmartClassRepository {

    async getCourses(): Promise<Course[]> {
        return apiService.get("/courses")
    }

    async getCourseById(id: string): Promise<Course> {
        return apiService.get(`/courses/${id}`)
    }

    async createCourse(data: CreateCourseDTO): Promise<Course> {
        return apiService.post("/courses", data)
    }

    async updateCourse(
        id: string,
        data: UpdateCourseDTO
    ): Promise<Course> {
        return apiService.put(`/courses/${id}`, data)
    }

    async deleteCourse(id: string): Promise<void> {
        return apiService.delete(`/courses/${id}`)
    }
}

export const smartClassRepository = new SmartClassRepository()