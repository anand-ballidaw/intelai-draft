export type ActivityType =
    | "USER_CREATED"
    | "COURSE_CREATED"
    | "ASSIGNMENT_CREATED"
    | "QUIZ_SUBMITTED"
    | "PAYMENT_RECORDED"
    | "ADMISSION_CREATED"
    | "CERTIFICATE_GENERATED"
    | "TRANSPORT_UPDATED"

export interface Activity {

    id: string

    type: ActivityType

    message: string

    userId?: string

    createdAt: string

}