"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores/auth-store"

export default function SignInPage() {

    const router = useRouter()

    const login = useAuthStore((state) => state.login)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        login({
            id: 1,
            name: "Demo User",
            role: "admin",
            email
        })

        router.push("/dashboard/admin")

    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow w-full max-w-md"
            >

                <h1 className="text-xl font-bold mb-6">
                    IntelCampus Sign In
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded p-2 mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded p-2 mb-6"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Sign In
                </button>

            </form>

        </div>

    )

}