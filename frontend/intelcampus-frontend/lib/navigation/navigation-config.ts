export type RoleNavigation = {

    director?: NavItem[]
    principal?: NavItem[]
    teacher?: NavItem[]
    student?: NavItem[]
    parent?: NavItem[]
    driver?: NavItem[]
    admin?: NavItem[]
    finance?: NavItem[]

}

export interface NavItem {

    label: string
    href: string

}

export const navigationConfig: RoleNavigation = {

    admin: [

        { label: "Dashboard", href: "/dashboard/admin" },
        { label: "Students", href: "/people/students" },
        { label: "Staff", href: "/people/staff" },
        { label: "Finance", href: "/finance/fees" },
        { label: "Documents", href: "/documents" },

    ],

    teacher: [

        { label: "Dashboard", href: "/dashboard/teacher" },
        { label: "Attendance", href: "/academics/attendance" },
        { label: "Exams", href: "/academics/exams" },
        { label: "Announcements", href: "/communication/announcements" },

    ],

    student: [

        { label: "Dashboard", href: "/dashboard/student" },
        { label: "Resources", href: "/smartclass/resources" },
        { label: "Announcements", href: "/communication/announcements" },
        { label: "Chat", href: "/communication/chat" },

    ],

    driver: [

        { label: "Dashboard", href: "/dashboard/driver" },
        { label: "Routes", href: "/transport/routes" },

    ],

    finance: [

        { label: "Dashboard", href: "/dashboard/finance" },
        { label: "Fees", href: "/finance/fees" },
        { label: "Salary", href: "/finance/salary" },

    ],

    principal: [

        { label: "Dashboard", href: "/dashboard/principal" },
        { label: "Analytics", href: "/analytics" },
        { label: "Announcements", href: "/communication/announcements" },

    ],

    director: [

        { label: "Dashboard", href: "/dashboard/director" },
        { label: "Analytics", href: "/analytics" },
        { label: "Finance", href: "/finance/fees" },

    ]

}