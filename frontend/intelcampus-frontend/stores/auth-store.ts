import { create } from "zustand"

export type UserRole =
    | "admin"
    | "teacher"
    | "student"
    | "parent"
    | "finance"
    | "driver"

export interface AuthUser {
    id: number
    name: string
    email?: string
    role: UserRole
    subscriptionActive?: boolean
}

interface AuthState {
    user: AuthUser | null
    login: (user: AuthUser) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    login: (user) =>
        set({
            user,
        }),

    logout: () =>
        set({
            user: null,
        }),
}))