import { Role } from "@/types/role"

const permissions: Record<Role, string[]> = {

    ADMIN: [
        "/dashboard",
        "/analytics",
        "/finance",
        "/hr",
        "/transport"
    ],

    DIRECTOR: [
        "/dashboard",
        "/analytics",
        "/admissions"
    ],

    PRINCIPAL: [
        "/dashboard",
        "/academics",
        "/attendance"
    ],

    TEACHER: [
        "/courses",
        "/assignments",
        "/quiz"
    ],

    STUDENT: [
        "/courses",
        "/quiz"
    ],

    PARENT: [
        "/dashboard"
    ],

    FINANCE: [
        "/finance"
    ],

    DRIVER: [
        "/transport"
    ]

}

export function hasPermission(role: Role, path: string) {

    const allowedRoutes = permissions[role] || []

    return allowedRoutes.some((route: string) =>
        path.startsWith(route)
    )

}