export type ModuleKey =
    | "academic"
    | "finance"
    | "transport"
    | "hr"
    | "library"
    | "laboratory"
    | "store"
    | "canteen"
    | "admissions"
    | "marketing"
    | "analytics"
    | "communication"

export interface PlatformModule {
    key: ModuleKey
    name: string
    description: string
}

export const MODULE_REGISTRY: PlatformModule[] = [

    {
        key: "academic",
        name: "Academic System",
        description: "Courses, lessons, quizzes, SmartClass"
    },

    {
        key: "finance",
        name: "Finance System",
        description: "Fees, payments, accounting"
    },

    {
        key: "transport",
        name: "Transport System",
        description: "Bus routes, drivers, transport tracking"
    },

    {
        key: "hr",
        name: "HR System",
        description: "Employee management and HR operations"
    },

    {
        key: "library",
        name: "Library System",
        description: "Book inventory and library management"
    },

    {
        key: "laboratory",
        name: "Laboratory System",
        description: "Lab inventory and experiment resources"
    },

    {
        key: "store",
        name: "Store Management",
        description: "Institution procurement and inventory"
    },

    {
        key: "canteen",
        name: "Canteen System",
        description: "Food services and canteen management"
    },

    {
        key: "admissions",
        name: "Admissions System",
        description: "Student admission and enquiry tracking"
    },

    {
        key: "marketing",
        name: "Marketing System",
        description: "Lead management and campaign tracking"
    },

    {
        key: "analytics",
        name: "Analytics System",
        description: "Institution analytics and reports"
    },

    {
        key: "communication",
        name: "Communication System",
        description: "Messaging, announcements, notifications"
    }

]