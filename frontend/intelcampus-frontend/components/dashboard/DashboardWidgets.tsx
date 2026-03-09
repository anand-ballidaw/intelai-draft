"use client"

interface Widget {
    title: string
    value: string
}

interface Props {
    role: string
}

export default function DashboardWidgets({ role }: Props) {

    const widgets: Record<string, Widget[]> = {

        director: [
            { title: "Total Students", value: "1250" },
            { title: "New Admissions", value: "45" },
            { title: "Monthly Revenue", value: "₹12,50,000" },
            { title: "Active Transport Routes", value: "18" }
        ],

        principal: [
            { title: "Total Teachers", value: "85" },
            { title: "Classes Today", value: "42" },
            { title: "Pending Reports", value: "6" }
        ],

        teacher: [
            { title: "Today's Classes", value: "5" },
            { title: "Assignments Pending", value: "12" },
            { title: "Attendance Marked", value: "3" }
        ],

        student: [
            { title: "My Courses", value: "6" },
            { title: "Assignments Due", value: "2" },
            { title: "Upcoming Exams", value: "1" }
        ],

        parent: [
            { title: "Children Enrolled", value: "1" },
            { title: "Fee Due", value: "₹5,000" },
            { title: "Attendance Today", value: "Present" }
        ],

        admin: [
            { title: "Total Users", value: "1400" },
            { title: "Visitors Today", value: "23" },
            { title: "Meetings Scheduled", value: "4" }
        ],

        finance: [
            { title: "Payments Today", value: "₹2,50,000" },
            { title: "Pending Fees", value: "₹1,20,000" },
            { title: "Transactions", value: "35" }
        ]

    }

    const roleWidgets = widgets[role] || []

    return (
        <div className="grid grid-cols-4 gap-4">

            {roleWidgets.map((widget, index) => (
                <div
                    key={index}
                    className="bg-white shadow rounded p-4 border"
                >
                    <h3 className="text-gray-500 text-sm">
                        {widget.title}
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                        {widget.value}
                    </p>
                </div>
            ))}

        </div>
    )
}