import { RoleNavigation } from "./navigation-types"

export const navigationConfig: RoleNavigation = {

    ADMIN: [
        { label: "Dashboard", href: "/dashboard/admin" },
        { label: "Users", href: "/dashboard/admin/users" },
        { label: "Analytics", href: "/dashboard/analytics" },
        { label: "Analytics", href: "/analytics" },
        { label: "Documents", href: "/documents" },
        { label: "Institution Settings", href: "/settings/institution" },
        { label: "Students", href: "/people/students" },
        { label: "Staff", href: "/people/staff" },
        { label: "Finance", href: "/finance/fees" },
        { label: "Institution Settings", href: "/settings/institution" },
    ],

    INSTRUCTOR: [
        { label: "Dashboard", href: "/dashboard/instructor" },
        { label: "Courses", href: "/dashboard/courses" },
        { label: "Create Course", href: "/dashboard/courses/create" },
        { label: "Analytics", href: "/dashboard/analytics" },
    ],

    STUDENT: [
        { label: "Dashboard", href: "/dashboard/student" },
        { label: "Courses", href: "/dashboard/courses" },
        { label: "Certificates", href: "/dashboard/certificates" },
    ],

    superadmin: [
        { label: "Platform Dashboard", href: "/superadmin/dashboard" },
    ],

    management: [
        { label: "Management Dashboard", href: "/management/dashboard" },
        { label: "Fees", href: "/finance/fees" },
        { label: "Salary", href: "/finance/salary" },
        { label: "Penalties", href: "/finance/penalties" },
        { label: "Analytics", href: "/analytics" },
        { label: "Institution Settings", href: "/settings/institution" }
    ],

    principal: [
        { label: "Dashboard", href: "/principal/dashboard" },
        { label: "Students", href: "/people/students" },
        { label: "Staff", href: "/people/staff" },
        { label: "Attendance", href: "/academics/attendance" },
        { label: "Exams", href: "/academics/exams" },
        { label: "Results", href: "/academics/results" },
        { label: "Announcements", href: "/communication/announcements" },
        { label: "Bus Routes", href: "/transport/routes" },
        { label: "Drivers", href: "/transport/drivers" },
        { label: "Fees", href: "/finance/fees" },
        { label: "Salary", href: "/finance/salary" },
        { label: "Penalties", href: "/finance/penalties" },
        { label: "Analytics", href: "/analytics" },
        { label: "Documents", href: "/documents" },
    ],

    hod: [
        { label: "HOD Dashboard", href: "/hod/dashboard" },
    ],

    teacher: [
        { label: "Dashboard", href: "/teacher/dashboard" },
        { label: "Attendance", href: "/academics/attendance" },
        { label: "Exams", href: "/academics/exams" },
        { label: "Resources", href: "/smartclass/resources" },
        { label: "Announcements", href: "/communication/announcements" },
        { label: "Chat", href: "/communication/chat" },
        { label: "Assignments", href: "/documents" },
    ],

    staff: [
        { label: "Staff Dashboard", href: "/staff/dashboard" },
    ],

    student: [
        { label: "Dashboard", href: "/student/dashboard" },
        { label: "Study Resources", href: "/smartclass/resources" },
        { label: "Announcements", href: "/communication/announcements" },
        { label: "Chat", href: "/communication/chat" },
    ],

    parent: [
        { label: "Parent Dashboard", href: "/parent/dashboard" },
    ],

    driver: [
        { label: "Driver Dashboard", href: "/driver/dashboard" },
        { label: "Routes", href: "/transport/routes" },
    ],

}