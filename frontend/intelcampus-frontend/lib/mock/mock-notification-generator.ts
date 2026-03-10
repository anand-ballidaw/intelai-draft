import { addNotification } from "@/stores/notification-store"

type NotificationType =
    | "finance"
    | "transport"
    | "announcement"
    | "assignment"
    | "meeting"
    | "visitor"
    | "system"

interface Notification {
    id: string
    title: string
    message: string
    type: NotificationType
    createdAt: string
    read: boolean
}

export function generateMockNotification() {

    const notification: Notification = {

        id: Math.random().toString(36).substring(2),

        title: "System Update",

        message: "A new system update has been deployed.",

        type: "system",

        createdAt: new Date().toISOString(),

        read: false

    }

    addNotification(notification)

}