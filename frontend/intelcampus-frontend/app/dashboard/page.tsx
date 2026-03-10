import type { Metadata } from "next";
import StatsCard from "@/components/dashboard/dashboard-layout";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import ActivityTimeline from "@/components/activity/activity-timeline";

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

            <StatsCard
                title="Total Users"
                value={1284}
                description="Registered accounts"
            />

            <StatsCard
                title="Active Subscriptions"
                value={842}
                description="Pro tier members"
            />

            <AnalyticsChart />

            <ActivityTimeline />

            <RecentActivity />
        </div>
    );
}