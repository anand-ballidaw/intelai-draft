export type UserRole =
    | "student"
    | "teacher"
    | "admin"
    | "principal"
    | "director"
    | "parent"

export function getDashboardRoute(role: UserRole): string {

    switch (role) {

        case "student":
            return "/dashboard/student"

        case "teacher":
            return "/dashboard/teacher"

        case "admin":
            return "/dashboard/admin"

        case "principal":
            return "/dashboard/principal"

        case "director":
            return "/dashboard/director"

        case "parent":
            return "/dashboard/parent"

        default:
            return "/dashboard"
    }

}
