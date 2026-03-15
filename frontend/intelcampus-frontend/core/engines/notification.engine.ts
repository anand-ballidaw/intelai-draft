export type NotificationType =
    | "info"
    | "success"
    | "warning"
    | "error"

export interface Notification {

    id: string

    title: string

    message: string

    type: NotificationType

    createdAt: string

}

type NotificationHandler = (notification: Notification) => void

class NotificationEngine {

    private listeners: NotificationHandler[] = []

    subscribe(handler: NotificationHandler) {

        this.listeners.push(handler)

    }

    notify(notification: Notification) {

        this.listeners.forEach(listener => listener(notification))

    }

    createNotification(

        title: string,
        message: string,
        type: NotificationType = "info"

    ): Notification {

        return {

            id: crypto.randomUUID(),

            title,

            message,

            type,

            createdAt: new Date().toISOString()

        }

    }

}

export const notificationEngine = new NotificationEngine()