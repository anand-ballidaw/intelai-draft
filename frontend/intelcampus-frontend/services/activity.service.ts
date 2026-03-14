import { useActivityStore } from "@/stores/activity-store"
import { ActivityType } from "@/types/activity"

export function logActivity(
    type: ActivityType,
    message: string,
    userId?: string
) {

    const { addActivity } = useActivityStore.getState()

    addActivity({

        id: Date.now().toString(),

        type,

        message,

        userId,

        createdAt: new Date().toISOString()

    })

}