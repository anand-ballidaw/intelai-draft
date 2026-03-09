import { UserRole } from "./auth-client"

export function getDashboardByRole(role: UserRole): string {

    switch (role) {

        case "director":
            return "/dashboard/director"

        case "principal":
            return "/dashboard/principal"

        case "teacher":
            return "/dashboard/teacher"

        case "student":
            return "/dashboard/student"

        case "driver":
            return "/dashboard/driver"

        case "admin":
            return "/dashboard/admin"

        case "finance":
            return "/dashboard/finance"

        default:
            return "/dashboard/student"
    }

}