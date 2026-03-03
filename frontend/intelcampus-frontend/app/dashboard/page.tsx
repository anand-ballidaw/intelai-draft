import type { Metadata } from "next";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">
                    Welcome to IntelCampus Dashboard
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Overview of your platform performance and analytics.
                </p>
            </div>

            <StatsCards />

            <AnalyticsChart />

            <RecentActivity />
        </div>
    );
}