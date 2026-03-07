"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
    MockUser,
    getCurrentUser,
    loginUser,
    logoutUser,
    registerUser,
    UserRole
} from "@/lib/auth/mockAuthClient"

interface AuthContextType {
    user: MockUser | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    register: (
        name: string,
        email: string,
        password: string,
        role: UserRole
    ) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<MockUser | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const existingUser = getCurrentUser()

        if (existingUser) {
            setUser(existingUser)
        }

        setLoading(false)

    }, [])

    async function login(email: string, password: string) {

        const user = loginUser(email, password)

        setUser(user)
    }

    async function register(
        name: string,
        email: string,
        password: string,
        role: UserRole
    ) {

        const user = registerUser(name, email, password, role)

        setUser(user)
    }

    function logout() {

        logoutUser()

        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return context
}