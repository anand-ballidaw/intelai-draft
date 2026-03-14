import { create } from "zustand"
import { Activity } from "@/types/activity"

interface ActivityState {

    activities: Activity[]

    addActivity: (activity: Activity) => void

}

export const useActivityStore = create<ActivityState>((set) => ({

    activities: [],

    addActivity: (activity) =>
        set((state) => ({
            activities: [activity, ...state.activities]
        }))

}))