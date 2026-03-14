import { Course } from "@/core/domain/Course"

export class CourseService {

    static createCourse(
        title: string,
        instructor: string,
        lessons: number
    ): Course {

        return {
            id: crypto.randomUUID(),
            title,
            instructor,
            lessons,
            createdAt: new Date().toISOString()
        }

    }

}