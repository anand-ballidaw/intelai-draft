export interface Course {

    id: string

    title: string

    description: string

    teacher: string

}

export interface Lesson {

    id: string

    courseId: string

    title: string

    videoUrl: string

}

export interface Assignment {

    id: string

    courseId: string

    title: string

    description: string

    dueDate: string

}

export interface Quiz {

    id: string

    courseId: string

    title: string

    totalMarks: number

}