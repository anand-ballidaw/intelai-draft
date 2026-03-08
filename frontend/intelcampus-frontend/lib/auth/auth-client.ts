export type UserRole =
    | "director"
    | "principal"
    | "teacher"
    | "student"
    | "parent"
    | "driver"
    | "admin"
    | "finance"

export interface AuthUser {
    id: string
    name: string
    email: string
    role: UserRole
    institution: string
}

const STORAGE_KEY = "intelcampus_user"

export function getAuthUser(): AuthUser | null {

    if (typeof window === "undefined") return null

    const data = localStorage.getItem(STORAGE_KEY)

    if (!data) return null

    return JSON.parse(data)
}

export function isAuthenticated(): boolean {

    return !!getAuthUser()

}

export function loginMock(email: string): AuthUser {

    let role: UserRole = "student"

    if (email.includes("admin")) role = "admin"
    else if (email.includes("principal")) role = "principal"
    else if (email.includes("teacher")) role = "teacher"
    else if (email.includes("driver")) role = "driver"
    else if (email.includes("finance")) role = "finance"

    const user: AuthUser = {

        id: "1",
        name: email.split("@")[0],
        email,
        role,
        institution: "IntelCampus Demo",

    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

    return user
}

export function logout() {

    localStorage.removeItem(STORAGE_KEY)

}

export function hasRole(role: UserRole): boolean {

    const user = getAuthUser()

    return user?.role === role

}

/* Temporary mock subscription system
   Later this will come from backend subscription API */

export function hasActiveSubscription(): boolean {

    const user = getAuthUser()

    if (!user) return false

    return true

}