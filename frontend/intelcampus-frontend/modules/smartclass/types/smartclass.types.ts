export interface Course {

    id: string
    name: string
    code: string
    description?: string

    departmentId: string
    institutionId: string

    createdAt: string
    updatedAt: string
}

export interface Subject {

    id: string
    name: string
    code: string

    courseId: string
    departmentId: string

    createdAt: string
    updatedAt: string
}

export interface ClassSection {

    id: string

    courseId: string
    section: string

    academicYear: string

    teacherId?: string

    createdAt: string
    updatedAt: string
}

export interface Enrollment {

    id: string

    studentId: string
    classId: string

    enrolledAt: string
}

export interface CreateCourseDTO {

    name: string
    code: string
    description?: string

    departmentId: string
    institutionId: string
}

export interface UpdateCourseDTO {

    name?: string
    code?: string
    description?: string
}