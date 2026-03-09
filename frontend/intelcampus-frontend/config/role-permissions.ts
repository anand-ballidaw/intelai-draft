export const rolePermissions: Record<string, string[]> = {

    ceo: [
        "/dashboard",
        "/dashboard/overview",
        "/academic",
        "/finance",
        "/hr",
        "/transport",
        "/admissions",
        "/smartclass"
    ],

    director: [
        "/dashboard",
        "/dashboard/overview",
        "/academic",
        "/finance",
        "/hr",
        "/transport",
        "/admissions",
        "/smartclass"
    ],

    manager: [
        "/dashboard",
        "/dashboard/overview",
        "/academic",
        "/finance",
        "/hr",
        "/transport"
    ],

    principal: [
        "/dashboard",
        "/academic",
        "/smartclass",
        "/hr",
        "/transport",
        "/meetings"
    ],

    "vice-principal": [
        "/dashboard",
        "/academic",
        "/smartclass",
        "/meetings"
    ],

    dean: [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    hod: [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    professor: [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    "associate-professor": [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    "assistant-professor": [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    teacher: [
        "/dashboard",
        "/academic",
        "/smartclass"
    ],

    admin: [
        "/dashboard",
        "/academic",
        "/finance",
        "/transport",
        "/hr",
        "/admissions",
        "/visitors",
        "/meetings"
    ],

    supervisor: [
        "/dashboard",
        "/transport",
        "/visitors"
    ],

    hr: [
        "/dashboard",
        "/hr"
    ],

    marketing: [
        "/dashboard",
        "/admissions"
    ],

    driver: [
        "/dashboard",
        "/transport"
    ],

    staff: [
        "/dashboard",
        "/visitors"
    ],

    frontoffice: [
        "/dashboard",
        "/visitors",
        "/meetings"
    ],

    parent: [
        "/dashboard"
    ],

    student: [
        "/dashboard",
        "/smartclass"
    ]

}