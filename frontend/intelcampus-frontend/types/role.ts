export type Role =
    | "ADMIN"
    | "DIRECTOR"
    | "PRINCIPAL"
    | "TEACHER"
    | "STUDENT"
    | "PARENT"
    | "FINANCE"
    | "DRIVER"

export type UserRole =
    | "admin"
    | "director"
    | "principal"
    | "teacher"
    | "student"
    | "parent"
    | "finance"
    | "driver"

export function normalizeRole(role: UserRole): Role {

    return role.toUpperCase() as Role

}