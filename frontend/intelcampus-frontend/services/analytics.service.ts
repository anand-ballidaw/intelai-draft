import { DashboardStats } from "@/types/analytics"

export interface AdmissionsTrend {
    month: string
    admissions: number
}

export interface AttendanceTrend {
    month: string
    attendance: number
}

export interface RevenueAnalytics {
    month: string
    revenue: number
}

class AnalyticsService {

    async getDashboardStats(): Promise<DashboardStats> {

        return {

            students: 1250,
            teachers: 85,
            courses: 42,
            revenue: 125000,
            attendanceRate: 92

        }

    }

    async getAdmissionsTrend(): Promise<AdmissionsTrend[]> {

        return [
            { month: "Jan", admissions: 120 },
            { month: "Feb", admissions: 140 },
            { month: "Mar", admissions: 160 },
            { month: "Apr", admissions: 180 }
        ]

    }

    async getAttendanceTrend(): Promise<AttendanceTrend[]> {

        return [
            { month: "Jan", attendance: 88 },
            { month: "Feb", attendance: 90 },
            { month: "Mar", attendance: 92 },
            { month: "Apr", attendance: 94 }
        ]

    }

    async getRevenueAnalytics(): Promise<RevenueAnalytics[]> {

        return [
            { month: "Jan", revenue: 20000 },
            { month: "Feb", revenue: 24000 },
            { month: "Mar", revenue: 26000 },
            { month: "Apr", revenue: 30000 }
        ]

    }

}

export const analyticsService = new AnalyticsService()