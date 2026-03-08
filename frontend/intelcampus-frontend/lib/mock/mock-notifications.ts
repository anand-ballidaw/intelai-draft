export interface Notification {
    id: string
    title: string
    message: string
    type: "info" | "warning" | "danger"
    time: string
}

export const mockNotifications: Notification[] = [
    {
        id: "1",
        title: "Fee Due",
        message: "Sneha Patel has pending fees.",
        type: "danger",
        time: "10 min ago",
    },
    {
        id: "2",
        title: "Attendance Alert",
        message: "Arjun Kumar attendance below 75%",
        type: "warning",
        time: "1 hour ago",
    },
    {
        id: "3",
        title: "Announcement",
        message: "Mid Term Exams will begin March 20.",
        type: "info",
        time: "2 hours ago",
    },
]