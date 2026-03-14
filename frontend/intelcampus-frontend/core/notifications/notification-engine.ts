import { Notification, NotificationType } from "./notification-types"

export class NotificationEngine {

    static createNotification(
        title: string,
        message: string,
        type: NotificationType,
        recipients: string[]
    ): Notification {

        return {
            id: crypto.randomUUID(),
            title,
            message,
            type,
            recipientIds: recipients,
            createdAt: new Date().toISOString(),
            readBy: []
        }

    }

    static markAsRead(
        notification: Notification,
        userId: string
    ): Notification {

        if (notification.readBy.includes(userId)) {
            return notification
        }

        return {
            ...notification,
            readBy: [...notification.readBy, userId]
        }

    }

    static isRead(
        notification: Notification,
        userId: string
    ): boolean {

        return notification.readBy.includes(userId)

    }

    static getUserNotifications(
        notifications: Notification[],
        userId: string
    ): Notification[] {

        return notifications.filter(n =>
            n.recipientIds.includes(userId)
        )

    }

}