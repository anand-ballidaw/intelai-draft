export type Role =
    | "subscriber"
    | "ceo"
    | "director"
    | "manager"
    | "principal"
    | "vice_principal"
    | "admin"
    | "dean"
    | "hod"
    | "professor"
    | "associate_professor"
    | "assistant_professor"
    | "teacher"
    | "hr"
    | "supervisor"
    | "marketing"
    | "department_staff"
    | "front_office"
    | "driver"
    | "parent"
    | "student"

export type Permission =
    | "view_dashboard"
    | "manage_users"
    | "manage_courses"
    | "manage_lessons"
    | "manage_quizzes"
    | "view_analytics"
    | "manage_finance"
    | "manage_transport"
    | "manage_admissions"
    | "manage_marketing"
    | "manage_hr"
    | "view_notifications"
    | "send_notifications"
    | "submit_assignment"
    | "attempt_quiz"
    | "view_results"
    | "manage_departments"
    | "view_reports"

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
    subscriber: [
        "view_dashboard",
        "view_analytics",
        "view_reports"
    ],

    ceo: [
        "view_dashboard",
        "view_analytics",
        "view_reports",
        "manage_users",
        "manage_departments"
    ],

    director: [
        "view_dashboard",
        "view_analytics",
        "view_reports",
        "manage_users",
        "manage_departments"
    ],

    manager: [
        "view_dashboard",
        "manage_users",
        "view_reports"
    ],

    principal: [
        "view_dashboard",
        "manage_users",
        "view_analytics",
        "view_reports",
        "manage_departments"
    ],

    vice_principal: [
        "view_dashboard",
        "view_reports"
    ],

    admin: [
        "view_dashboard",
        "manage_users",
        "manage_admissions",
        "manage_marketing",
        "manage_finance",
        "manage_transport",
        "manage_hr"
    ],

    dean: [
        "view_dashboard",
        "manage_courses",
        "manage_lessons",
        "manage_quizzes"
    ],

    hod: [
        "view_dashboard",
        "manage_courses",
        "manage_lessons"
    ],

    professor: [
        "view_dashboard",
        "manage_courses",
        "manage_lessons",
        "manage_quizzes"
    ],

    associate_professor: [
        "view_dashboard",
        "manage_courses",
        "manage_lessons"
    ],

    assistant_professor: [
        "view_dashboard",
        "manage_courses",
        "manage_lessons"
    ],

    teacher: [
        "view_dashboard",
        "manage_lessons",
        "manage_quizzes"
    ],

    hr: [
        "view_dashboard",
        "manage_hr",
        "view_reports"
    ],

    supervisor: [
        "view_dashboard"
    ],

    marketing: [
        "view_dashboard",
        "manage_marketing",
        "view_reports"
    ],

    department_staff: [
        "view_dashboard"
    ],

    front_office: [
        "view_dashboard",
        "manage_admissions"
    ],

    driver: [
        "view_dashboard",
        "manage_transport"
    ],

    parent: [
        "view_dashboard",
        "view_notifications",
        "view_results"
    ],

    student: [
        "view_dashboard",
        "submit_assignment",
        "attempt_quiz",
        "view_results",
        "view_notifications"
    ]
}