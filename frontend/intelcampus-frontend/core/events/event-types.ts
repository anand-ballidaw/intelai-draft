export type EventType =
    | "user_login"
    | "user_logout"
    | "course_created"
    | "lesson_created"
    | "assignment_submitted"
    | "quiz_attempted"
    | "fee_paid"
    | "attendance_marked"
    | "admission_enquiry"
    | "transport_update"
    | "system_action"

export interface SystemEvent {

    id: string

    type: EventType

    actorId: string

    entityId?: string

    metadata?: Record<string, any>

    createdAt: string

}