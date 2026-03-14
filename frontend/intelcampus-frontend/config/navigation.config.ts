import { Role } from "@/types/role"

export interface NavItem {
    label: string
    path: string
    roles: Role[]
}

export const navigationItems: NavItem[] = [

    {
        label: "Dashboard",
        path: "/dashboard",
        roles: ["ADMIN", "DIRECTOR", "PRINCIPAL", "TEACHER", "STUDENT"]
    },

    {
        label: "Analytics",
        path: "/dashboard/analytics",
        roles: ["ADMIN", "DIRECTOR", "PRINCIPAL"]
    },

    {
        label: "Courses",
        path: "/courses",
        roles: ["ADMIN", "DIRECTOR", "TEACHER", "STUDENT"]
    },

    {
        label: "Assignments",
        path: "/assignments",
        roles: ["TEACHER", "STUDENT"]
    },

    {
        label: "Attendance",
        path: "/attendance",
        roles: ["TEACHER", "PRINCIPAL"]
    },

    {
        label: "Admissions",
        path: "/admissions",
        roles: ["ADMIN", "DIRECTOR"]
    },

    {
        label: "Finance",
        path: "/finance",
        roles: ["ADMIN", "FINANCE"]
    },

    {
        label: "HR",
        path: "/hr",
        roles: ["ADMIN"]
    },

    {
        label: "Transport",
        path: "/transport",
        roles: ["ADMIN", "DRIVER"]
    },

    {
        label: "Certificates",
        path: "/certificates",
        roles: ["ADMIN", "TEACHER", "STUDENT"]
    }

]