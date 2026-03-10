export type UserRole =
    | "superadmin"
    | "admin"
    | "ceo"
    | "director"
    | "manager"
    | "principal"
    | "vice_principal"
    | "dean"
    | "hod"
    | "teacher"
    | "student"
    | "parent"
    | "finance"
    | "driver"

/*
ROLE → DASHBOARD ROUTING
Used after login/register
*/
export const roleDashboardMap: Record<UserRole, string> = {

    superadmin: "/dashboard/admin",

    admin: "/dashboard/admin",

    ceo: "/dashboard/admin",

    director: "/dashboard/admin",

    manager: "/dashboard/admin",

    principal: "/dashboard/admin",

    vice_principal: "/dashboard/admin",

    dean: "/dashboard/admin",

    hod: "/dashboard/teacher",

    teacher: "/dashboard/teacher",

    student: "/dashboard/student",

    parent: "/dashboard/parent",

    finance: "/dashboard/finance",

    driver: "/dashboard/driver"

}

/*
ROLE PERMISSIONS SYSTEM
*/
export const rolePermissions: Record<UserRole, string[]> = {

    superadmin: [
        "platform_control",
        "manage_institutions",
        "view_analytics",
        "manage_users"
    ],

    admin: [
        "manage_users",
        "view_analytics",
        "manage_courses"
    ],

    ceo: ["view_analytics", "view_finance"],

    director: ["view_analytics", "view_finance"],

    manager: ["view_analytics"],

    principal: ["view_analytics"],

    vice_principal: ["view_analytics"],

    dean: ["manage_courses"],

    hod: ["manage_courses"],

    teacher: [
        "create_course",
        "manage_lessons",
        "grade_assignments"
    ],

    student: [
        "view_courses",
        "submit_assignments",
        "attempt_quiz"
    ],

    parent: [
        "view_student_progress"
    ],

    finance: [
        "view_finance",
        "manage_payments"
    ],

    driver: [
        "view_transport_routes"
    ]

}