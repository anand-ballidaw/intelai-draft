"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToastStore } from "@/stores/toast.store"

const STORAGE_KEY = "intelcampus_user"

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

            const storedUserRaw =
                localStorage.getItem(STORAGE_KEY)

            if (!storedUserRaw) {

                throw new Error("User not registered")

            }

            const storedUser =
                JSON.parse(storedUserRaw)

            if (storedUser.email !== email) {

                throw new Error("Invalid email")

            }

            addToast("Login successful", "success")

            // ROLE BASED ROUTING

            if (storedUser.role === "ADMIN") {

                router.push("/admin/dashboard")

            } else if (storedUser.role === "INSTRUCTOR") {

                router.push("/instructor/dashboard")

            } else {

                router.push("/dashboard")

            }

        } catch (err: any) {

            const message =
                err?.message || "Login failed"

            addToast(message, "error")

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