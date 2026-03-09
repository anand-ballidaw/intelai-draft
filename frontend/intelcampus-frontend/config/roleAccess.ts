export const roleAccess: Record<string, string[]> = {

    admin: [
        "/dashboard/admin",
        "/dashboard/finance",
        "/dashboard/student",
        "/dashboard/teacher",
        "/dashboard/principal",
        "/dashboard/director"
    ],

    director: [
        "/dashboard/director"
    ],

    principal: [
        "/dashboard/principal"
    ],

    teacher: [
        "/dashboard/teacher"
    ],

    student: [
        "/dashboard/student"
    ],

    parent: [
        "/dashboard/parent"
    ],

    driver: [
        "/dashboard/driver"
    ],

    finance: [
        "/dashboard/finance"
    ]

}