"use client"

export interface AuthUser {
    id: string
    name: string
    email: string
    role: "ADMIN" | "INSTRUCTOR" | "STUDENT"
}

const STORAGE_KEY = "intelcampus_user"

function getStoredUser(): AuthUser | null {

    if (typeof window === "undefined") return null

    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) return null

    try {
        return JSON.parse(raw)
    } catch {
        return null
    }
}

export async function register(
    name: string,
    email: string,
    password: string
): Promise<AuthUser> {

    const user: AuthUser = {
        id: crypto.randomUUID(),
        name,
        email,
        role: "STUDENT"
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

    return user
}

export async function login(
    email: string,
    password: string
): Promise<AuthUser> {

    const user = getStoredUser()

    if (!user) {
        throw new Error("User not registered")
    }

    if (user.email !== email) {
        throw new Error("Invalid email")
    }

    return user
}

export async function getCurrentUser(): Promise<AuthUser | null> {

    return getStoredUser()

}

export async function logout(): Promise<void> {

    localStorage.removeItem(STORAGE_KEY)

}