"use client"

import { useAuthStore } from "@/stores/auth-store"
import { hasPermission } from "@/services/permission.service"
import { normalizeRole } from "@/types/role"

export function usePermission() {

    const { user } = useAuthStore()

    function canAccess(path: string) {

        if (!user) return false

        const role = normalizeRole(user.role)

        return hasPermission(role, path)

    }

    return {
        canAccess
    }

}