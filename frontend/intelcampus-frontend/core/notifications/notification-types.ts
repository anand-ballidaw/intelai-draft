export type NotificationType =
    | "announcement"
    | "assignment"
    | "quiz"
    | "finance"
    | "transport"
    | "admissions"
    | "marketing"
    | "system"
    | "complaint"
    | "attendance"

export interface Notification {

    id: string

    title: string

    message: string

    type: NotificationType

    recipientIds: string[]

    createdAt: string

    readBy: string[]
}