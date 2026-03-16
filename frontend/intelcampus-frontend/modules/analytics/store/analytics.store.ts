import { create } from "zustand"
import { DashboardStats } from "../types/analytics.types"
import { analyticsService } from "../service/analytics.service"

interface AnalyticsState {

    stats?: DashboardStats
    loading: boolean

    fetchDashboardStats: () => Promise<void>
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({

    stats: undefined,
    loading: false,

    fetchDashboardStats: async () => {

        set({ loading: true })

        const stats = await analyticsService.getDashboardStats()

        set({
            stats,
            loading: false
        })
    }

}))