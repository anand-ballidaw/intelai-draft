import { useNotificationStore } from "@/stores/notification-store"

export function pushNotification(title: string, message: string, type: any) {

    const { addNotification } = useNotificationStore.getState()

    addNotification({

        id: Date.now().toString(),

        title,

        message,

        type,

        read: false,

        createdAt: new Date().toISOString()

    })

}