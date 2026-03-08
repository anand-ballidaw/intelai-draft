import { UserRole } from "./auth-client"

export const roleDashboardMap: Record<UserRole, string> = {

    director: "/dashboard/director",

    principal: "/dashboard/principal",

    teacher: "/dashboard/teacher",

    student: "/dashboard/student",

    parent: "/dashboard/parent",

    driver: "/dashboard/driver",

    admin: "/dashboard/admin",

    finance: "/dashboard/finance"

}