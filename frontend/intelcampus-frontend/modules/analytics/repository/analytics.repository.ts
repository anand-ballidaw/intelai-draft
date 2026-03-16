import { apiService } from "@/services/api.service"
import { DashboardStats } from "../types/analytics.types"

class AnalyticsRepository {

    async getDashboardStats(): Promise<DashboardStats> {
        return apiService.get("/analytics/dashboard")
    }

}

export const analyticsRepository = new AnalyticsRepository()