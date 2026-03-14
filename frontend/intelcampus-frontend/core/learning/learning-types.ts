export interface Course {

    id: string

    title: string

    description: string

    teacherId: string

    lessonIds: string[]

    studentIds: string[]

    createdAt: string
}

export interface Lesson {

    id: string

    courseId: string

    title: string

    content: string

    createdAt: string
}

export interface SmartClassSession {

    id: string

    courseId: string

    lessonId: string

    teacherId: string

    scheduledAt: string
}

export interface StudentProgress {

    studentId: string

    courseId: string

    completedLessons: string[]

    lastAccessed?: string
}