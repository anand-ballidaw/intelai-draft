export type Role =
    | "admin"
    | "director"
    | "principal"
    | "teacher"
    | "student"
    | "parent"
    | "finance"
    | "transport"
    | "librarian"
    | "marketing"

interface PermissionRule {

    role: Role

    modules: string[]

}

class PermissionEngine {

    private rules: PermissionRule[] = [

        {
            role: "admin",
            modules: ["*"]
        },

        {
            role: "director",
            modules: [
                "students",
                "finance",
                "transport",
                "library",
                "analytics"
            ]
        },

        {
            role: "principal",
            modules: [
                "students",
                "analytics",
                "library"
            ]
        },

        {
            role: "teacher",
            modules: [
                "students",
                "smartclass"
            ]
        },

        {
            role: "student",
            modules: [
                "smartclass"
            ]
        },

        {
            role: "finance",
            modules: [
                "finance"
            ]
        },

        {
            role: "transport",
            modules: [
                "transport"
            ]
        },

        {
            role: "librarian",
            modules: [
                "library"
            ]
        },

        {
            role: "marketing",
            modules: [
                "admissions"
            ]
        }

    ]

    canAccess(role: Role, moduleId: string): boolean {

        const rule = this.rules.find(r => r.role === role)

        if (!rule) return false

        if (rule.modules.includes("*")) return true

        return rule.modules.includes(moduleId)

    }

}

export const permissionEngine = new PermissionEngine()