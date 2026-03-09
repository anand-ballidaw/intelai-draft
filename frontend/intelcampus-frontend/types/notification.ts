export interface Notification {

    id: string

    title: string

    message: string

    type: "announcement" | "assignment" | "finance" | "transport" | "meeting" | "visitor" | "system"

    targetRole?: string

    read: boolean

    createdAt: string

}