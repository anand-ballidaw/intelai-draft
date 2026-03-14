export type AuditAction =
    | "user_login"
    | "user_logout"
    | "user_role_changed"
    | "course_created"
    | "lesson_created"
    | "assignment_submitted"
    | "payment_recorded"
    | "settings_updated"
    | "workflow_approved"
    | "module_enabled"
    | "module_disabled"

export interface AuditLog {

    id: string

    action: AuditAction

    actorId: string

    entityId?: string

    metadata?: Record<string, any>

    createdAt: string

}