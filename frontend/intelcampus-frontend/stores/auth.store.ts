import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole =
    | "admin"
    | "teacher"
    | "student"
    | "parent"
    | "finance"
    | "driver";

export interface AuthUser {
    id?: number;
    name?: string;
    email?: string;
    role: UserRole | null;
    subscriptionActive?: boolean;
}

interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    role: UserRole | null;
    hasHydrated: boolean;

    setAuthenticated: (value: boolean, role?: UserRole) => void;
    setUser: (user: AuthUser) => void;
    logout: () => void;
    setHasHydrated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            role: null,
            hasHydrated: false,

            setAuthenticated: (value, role = "student") =>
                set({
                    isAuthenticated: value,
                    role: value ? role : null,
                }),

            setUser: (user) =>
                set({
                    user,
                    isAuthenticated: true,
                    role: user.role,
                }),

            logout: () =>
                set({
                    user: null,
                    isAuthenticated: false,
                    role: null,
                }),

            setHasHydrated: (value) => set({ hasHydrated: value }),
        }),
        {
            name: "intelcampus-auth",
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);