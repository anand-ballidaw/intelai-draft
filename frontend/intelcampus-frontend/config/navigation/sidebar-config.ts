import { Permission } from "@/core/permission/role-permissions"

export interface SidebarItem {

    label: string

    href: string

    permission?: Permission

}

export const SIDEBAR_ITEMS: SidebarItem[] = [

    {
        label: "Dashboard",
        href: "/dashboard",
        permission: "view_dashboard"
    },

    {
        label: "Students",
        href: "/dashboard/students",
        permission: "manage_users"
    },

    {
        label: "Courses",
        href: "/dashboard/courses",
        permission: "manage_courses"
    },

    {
        label: "Lessons",
        href: "/dashboard/lessons",
        permission: "manage_lessons"
    },

    {
        label: "Departments",
        href: "/dashboard/departments",
        permission: "manage_departments"
    },

    {
        label: "HR",
        href: "/dashboard/hr",
        permission: "manage_hr"
    },

    {
        label: "Finance",
        href: "/dashboard/finance",
        permission: "manage_finance"
    },

    {
        label: "Transport",
        href: "/dashboard/transport",
        permission: "manage_transport"
    },

    {
        label: "Analytics",
        href: "/dashboard/analytics",
        permission: "view_analytics"
    }

]