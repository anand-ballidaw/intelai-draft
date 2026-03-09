import { create } from "zustand"
import { DashboardStats } from "@/types/analytics"

interface AnalyticsState {

    stats: DashboardStats

    setStats: (stats: DashboardStats) => void

}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({

    stats: {

        totalStudents: 0,
        totalTeachers: 0,
        totalCourses: 0,
        totalAdmissions: 0,
        totalVehicles: 0,
        totalEmployees: 0,
        totalRevenue: 0

    },

    setStats: (stats) => set({ stats })

}))