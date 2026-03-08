"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginMock } from "@/lib/auth/auth-client"
import { getDashboardByRole } from "@/lib/auth/role-redirect"
import { useToastStore } from "@/stores/toast.store"

export default function SignInForm() {

    const router = useRouter()

    const addToast = useToastStore((s) => s.addToast)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            const user = loginMock(email)

            addToast("Login successful", "success")

            const redirect = getDashboardByRole(user.role)

            router.push(redirect)

        } catch (err: any) {

            addToast("Login failed", "error")

        }

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md"
        >

            <div>

                <label className="text-sm font-medium">
                    Email
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
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
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />

            </div>

            <button
                type="submit"
                className="w-full py-2 bg-primary text-primary-foreground rounded-md"
            >
                Sign In
            </button>

        </form>

    )

}