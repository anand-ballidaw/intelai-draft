"use client"

export type UserRole = "ADMIN" | "INSTRUCTOR" | "STUDENT"

export interface MockUser {
    id: string
    name: string
    email: string
    role: UserRole
}

const STORAGE_KEY = "intelcampus_user"

export function getCurrentUser(): MockUser | null {

    if (typeof window === "undefined") return null

    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) return null

    try {
        return JSON.parse(stored)
    } catch {
        return null
    }
}

export function registerUser(
    name: string,
    email: string,
    password: string,
    role: UserRole
): MockUser {

    const user: MockUser = {
        id: crypto.randomUUID(),
        name,
        email,
        role
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

    return user
}

export function loginUser(
    email: string,
    password: string
): MockUser {

    const existing = getCurrentUser()

    if (!existing) {
        throw new Error("User not registered. Please register first.")
    }

    if (existing.email !== email) {
        throw new Error("Invalid email")
    }

    return existing
}

export function logoutUser() {
    localStorage.removeItem(STORAGE_KEY)
}