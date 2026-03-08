"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginMock } from "@/lib/auth/auth-client"
import { roleDashboardMap } from "@/lib/auth/roles"
import { UserRole } from "@/lib/auth/auth-client"

export default function RegisterForm() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const user = loginMock(email)

        const role = user.role as UserRole

        router.push(roleDashboardMap[role])

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

            <div>
                <label className="text-sm font-medium">
                    Email
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
            </div>

            <div>
                <label className="text-sm font-medium">
                    Password
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-primary text-primary-foreground rounded-md"
            >
                Register
            </button>

        </form>

    )

}