<<<<<<< HEAD
export const mockNotifications = [

    {
        id: 1,
        title: "New Admission",
        message: "A new admission application has been submitted.",
        time: "5 minutes ago"
    },

    {
        id: 2,
        title: "Fee Payment",
        message: "Rahul Sharma completed tuition fee payment.",
        time: "20 minutes ago"
    },

    {
        id: 3,
        title: "Meeting Scheduled",
        message: "Academic planning meeting scheduled tomorrow.",
        time: "1 hour ago"
    }

=======
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
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
]