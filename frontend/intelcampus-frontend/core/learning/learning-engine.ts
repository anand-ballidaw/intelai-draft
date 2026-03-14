import {
    Course,
    Lesson,
    SmartClassSession,
    StudentProgress
} from "./learning-types"

export class LearningEngine {

    static createCourse(
        title: string,
        description: string,
        teacherId: string
    ): Course {

        return {

            id: crypto.randomUUID(),

            title,

            description,

            teacherId,

            lessonIds: [],

            studentIds: [],

            createdAt: new Date().toISOString()

        }

    }

    static addLesson(
        course: Course,
        lessonTitle: string,
        content: string
    ): { course: Course; lesson: Lesson } {

        const lesson: Lesson = {

            id: crypto.randomUUID(),

            courseId: course.id,

            title: lessonTitle,

            content,

            createdAt: new Date().toISOString()

        }

        return {

            course: {

                ...course,

                lessonIds: [...course.lessonIds, lesson.id]

            },

            lesson

        }

    }

    static enrollStudent(
        course: Course,
        studentId: string
    ): Course {

        if (course.studentIds.includes(studentId)) {
            return course
        }

        return {

            ...course,

            studentIds: [...course.studentIds, studentId]

        }

    }

    static scheduleSmartClass(
        courseId: string,
        lessonId: string,
        teacherId: string,
        scheduledAt: string
    ): SmartClassSession {

        return {

            id: crypto.randomUUID(),

            courseId,

            lessonId,

            teacherId,

            scheduledAt

        }

    }

    static updateProgress(
        progress: StudentProgress,
        lessonId: string
    ): StudentProgress {

        if (progress.completedLessons.includes(lessonId)) {
            return progress
        }

        return {

            ...progress,

            completedLessons: [...progress.completedLessons, lessonId],

            lastAccessed: new Date().toISOString()

        }

    }

}