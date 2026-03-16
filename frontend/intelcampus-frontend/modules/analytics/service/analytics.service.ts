import { analyticsRepository } from "../repository/analytics.repository"
import { DashboardStats } from "../types/analytics.types"

class AnalyticsService {

    async getDashboardStats(): Promise<DashboardStats> {
        return analyticsRepository.getDashboardStats()
    }

}

export const analyticsService = new AnalyticsService()