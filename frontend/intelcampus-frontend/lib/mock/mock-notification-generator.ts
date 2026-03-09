import { useNotificationStore } from "@/stores/notification-store"

export function generateMockNotification() {

    const { addNotification } = useNotificationStore.getState()

    const notification = {

        id: Date.now().toString(),

        title: "New Assignment",

        message: "Math assignment uploaded for Class 10",

        type: "info",

        createdAt: new Date().toISOString(),

        read: false

    }

    addNotification(notification)

}