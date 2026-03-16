export interface Lead {

    id: string

    name: string
    email: string
    phone?: string

    courseInterested?: string

    source?: string

    status:
    | "NEW"
    | "CONTACTED"
    | "FOLLOW_UP"
    | "CONVERTED"
    | "REJECTED"

    createdAt: string
}

export interface Admission {

    id: string

    studentName: string
    email: string
    phone?: string

    course: string

    status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"

    createdAt: string
}