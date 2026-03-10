export const rolePermissions = {

    ceo: [
        "dashboard",
        "analytics",
        "finance",
        "hr",
        "admissions",
        "marketing",
        "reports"
    ],

    director: [
        "dashboard",
        "analytics",
        "academic",
        "staff",
        "reports"
    ],

    principal: [
        "dashboard",
        "classes",
        "teachers",
        "students",
        "attendance",
        "exams"
    ],

    teacher: [
        "dashboard",
        "smartclass",
        "attendance",
        "assignments",
        "quiz"
    ],

    student: [
        "dashboard",
        "courses",
        "quiz",
        "progress",
        "certificates"
    ],

    parent: [
        "dashboard",
        "child-progress",
        "communication"
    ],

    finance: [
        "dashboard",
        "payments",
        "fees",
        "finance-reports"
    ],

    admin: [
        "dashboard",
        "users",
        "settings",
        "roles"
    ]

}