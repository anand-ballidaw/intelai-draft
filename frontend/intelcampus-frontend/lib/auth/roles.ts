export type UserRole =
    | "superadmin"
    | "management"
    | "principal"
    | "hod"
    | "teacher"
    | "staff"
    | "student"
    | "parent"
    | "driver"
    | "ADMIN"
    | "INSTRUCTOR"
    | "STUDENT";

export const roleDashboardMap: Record<UserRole, string> = {
    superadmin: "/superadmin/dashboard",
    management: "/management/dashboard",
    principal: "/principal/dashboard",
    hod: "/hod/dashboard",
    teacher: "/teacher/dashboard",
    staff: "/staff/dashboard",
    student: "/student/dashboard",
    parent: "/parent/dashboard",
    driver: "/driver/dashboard",

    ADMIN: "/superadmin/dashboard",
    INSTRUCTOR: "/teacher/dashboard",
    STUDENT: "/student/dashboard",
};