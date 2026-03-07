"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/auth-client";
import { roleDashboardMap } from "@/lib/auth/roles";

export default function SignInForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const user = login(email, password);

            const redirectPath = roleDashboardMap[user.role];

            router.push(redirectPath);
        } catch (err: any) {
            setError("Login failed. Check email/password.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
            </div>

            <div>
                <label className="text-sm font-medium">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 mt-1"
                />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
                type="submit"
                className="w-full py-2 bg-primary text-primary-foreground rounded-md"
            >
                Sign In
            </button>
        </form>
    );
}