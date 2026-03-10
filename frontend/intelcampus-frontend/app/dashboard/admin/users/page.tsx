"use client"

import ProtectedRoute from "@/components/auth/protected-route"
import { useAuthStore } from "@/stores/auth.store"

export default function AdminUsersPage() {

    const role = useAuthStore((state) => state.role)

    return (

        <ProtectedRoute requiredRole="admin">

            <div className="space-y-10">

                <h1 className="text-2xl font-semibold">
                    User Management
                </h1>

                <p className="text-gray-600">
                    Manage platform users and roles.
                </p>

            </div>

        </ProtectedRoute>

    )

}