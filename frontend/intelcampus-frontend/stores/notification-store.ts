import { create } from "zustand"

export type NotificationType =
    | "finance"
    | "transport"
    | "announcement"
    | "assignment"
    | "meeting"
    | "visitor"
    | "system"

export interface Notification {
    id: string
    title: string
    message: string
    type: NotificationType
    createdAt: string
    read: boolean
}

interface NotificationState {
    notifications: Notification[]
    addNotification: (notification: Notification) => void
    markAsRead: (id: string) => void
    clearNotifications: () => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
    notifications: [],

    addNotification: (notification) =>
        set((state) => ({
            notifications: [notification, ...state.notifications],
        })),

    markAsRead: (id) =>
        set((state) => ({
            notifications: state.notifications.map((n) =>
                n.id === id ? { ...n, read: true } : n
            ),
        })),

    clearNotifications: () =>
        set({
            notifications: [],
        }),
}))

export const addNotification = (notification: Notification) =>
    useNotificationStore.getState().addNotification(notification)