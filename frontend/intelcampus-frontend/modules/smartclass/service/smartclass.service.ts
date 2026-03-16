import { smartClassRepository } from "../repository/smartclass.repository"

import {
    Course,
    CreateCourseDTO,
    UpdateCourseDTO
} from "../types/smartclass.types"

import { eventBusService } from "@/services/event-bus.service"

class SmartClassService {

    async listCourses(): Promise<Course[]> {
        return smartClassRepository.getCourses()
    }

    async getCourse(id: string): Promise<Course> {
        return smartClassRepository.getCourseById(id)
    }

    async createCourse(data: CreateCourseDTO): Promise<Course> {

        const course = await smartClassRepository.createCourse(data)

        eventBusService.publish("course.created", course)

        return course
    }

    async updateCourse(
        id: string,
        data: UpdateCourseDTO
    ): Promise<Course> {

        const course = await smartClassRepository.updateCourse(id, data)

        eventBusService.publish("course.updated", course)

        return course
    }

    async deleteCourse(id: string): Promise<void> {

        await smartClassRepository.deleteCourse(id)

        eventBusService.publish("course.deleted", { id })
    }
}

export const smartClassService = new SmartClassService()