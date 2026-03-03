"use client"

export type UserRole = "student" | "instructor" | "admin"

export interface AuthUser {
    id: string
    name: string
    email: string
    role: UserRole
    subscriptionActive: boolean
}

export function getAuthUser(): AuthUser | null {
    if (typeof window === "undefined") return null

    const raw = localStorage.getItem("intelcampus_user")
    if (!raw) return null

    try {
        return JSON.parse(raw) as AuthUser
    } catch {
        return null
    }
}

export function isAuthenticated(): boolean {
    return !!getAuthUser()
}

export function hasRole(requiredRole: UserRole): boolean {
    const user = getAuthUser()
    if (!user) return false
    return user.role === requiredRole
}

export function hasActiveSubscription(): boolean {
    const user = getAuthUser()
    if (!user) return false
    return user.subscriptionActive
}