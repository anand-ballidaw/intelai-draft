export const roleNavigation: Record<string, { label: string; href: string }[]> = {

    admin: [
        { label: "Dashboard", href: "/dashboard/admin" },
        { label: "Admissions", href: "/admissions" },
        { label: "Marketing", href: "/marketing/leads" },
        { label: "Finance", href: "/finance" },
        { label: "Transport", href: "/transport" },
        { label: "Communication", href: "/communication" },
    ],

    director: [
        { label: "Dashboard", href: "/dashboard/director" },
        { label: "Analytics", href: "/analytics" },
        { label: "Finance Overview", href: "/finance" },
        { label: "Admissions", href: "/admissions" },
    ],

    principal: [
        { label: "Dashboard", href: "/dashboard/principal" },
        { label: "Teachers", href: "/teachers" },
        { label: "Students", href: "/students" },
        { label: "SmartClass", href: "/smartclass" },
    ],

    teacher: [
        { label: "Dashboard", href: "/dashboard/teacher" },
        { label: "My Classes", href: "/smartclass" },
        { label: "Assignments", href: "/assignments" },
        { label: "Communication", href: "/communication" },
    ],

    student: [
        { label: "Dashboard", href: "/dashboard/student" },
        { label: "Courses", href: "/courses" },
        { label: "Assignments", href: "/assignments" },
        { label: "Announcements", href: "/communication" },
    ],

    parent: [
        { label: "Dashboard", href: "/dashboard/parent" },
        { label: "Child Progress", href: "/progress" },
        { label: "Fees", href: "/finance" },
        { label: "Communication", href: "/communication" },
    ],

    driver: [
        { label: "Dashboard", href: "/dashboard/driver" },
        { label: "Transport Routes", href: "/transport/routes" },
        { label: "Student Pickup", href: "/transport/pickup" },
    ],

    finance: [
        { label: "Dashboard", href: "/dashboard/finance" },
        { label: "Payments", href: "/finance/payments" },
        { label: "Reports", href: "/finance/reports" },
    ]

}