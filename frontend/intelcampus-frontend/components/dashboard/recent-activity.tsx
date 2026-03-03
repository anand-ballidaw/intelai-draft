import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentActivity() {
    const activities = [
        "Student A improved rank in Mathematics.",
        "New course 'Advanced Science' added.",
        "Weekly analytics report generated.",
        "Student B completed Technology module.",
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {activities.map((activity, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                        • {activity}
                    </p>
                ))}
            </CardContent>
        </Card>
    );
}