import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "MANAGEMENT" | "STUDENT";

interface AuthState {
    isAuthenticated: boolean;
    role: UserRole | null;
    hasHydrated: boolean;
    setAuthenticated: (value: boolean, role?: UserRole) => void;
    logout: () => void;
    setHasHydrated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            role: null,
            hasHydrated: false,

            setAuthenticated: (value, role = "STUDENT") =>
                set({
                    isAuthenticated: value,
                    role: value ? role : null,
                }),

            logout: () =>
                set({
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