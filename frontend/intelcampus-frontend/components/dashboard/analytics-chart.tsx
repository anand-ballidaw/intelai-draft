"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { month: "Jan", students: 400 },
    { month: "Feb", students: 450 },
    { month: "Mar", students: 500 },
    { month: "Apr", students: 480 },
    { month: "May", students: 520 },
    { month: "Jun", students: 600 },
];

export function AnalyticsChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Student Growth Overview</CardTitle>
            </CardHeader>

            <CardContent className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="students" stroke="#3b82f6" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}