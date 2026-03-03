import { UserRole } from "@/lib/auth/auth-client"

export interface NavItem {
    title: string
    href: string
}

export const navigationConfig: Record<UserRole, NavItem[]> = {
    student: [
        { title: "Dashboard", href: "/dashboard/student" },
        { title: "My Courses", href: "/dashboard/courses" },
        { title: "Progress", href: "/dashboard/progress" },
        { title: "Profile", href: "/dashboard/profile" },
    ],
    instructor: [
        { title: "Dashboard", href: "/dashboard/instructor" },
        { title: "Manage Courses", href: "/dashboard/manage-courses" },
        { title: "Students", href: "/dashboard/students" },
        { title: "Profile", href: "/dashboard/profile" },
    ],
    admin: [
        { title: "Dashboard", href: "/dashboard/admin" },
        { title: "Users", href: "/dashboard/users" },
        { title: "Courses", href: "/dashboard/all-courses" },
        { title: "Subscriptions", href: "/dashboard/subscriptions" },
        { title: "Platform Settings", href: "/dashboard/settings" },
    ],
}