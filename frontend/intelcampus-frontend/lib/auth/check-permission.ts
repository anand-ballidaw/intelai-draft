import { rolePermissions } from "@/config/role-permissions"

export function hasPermission(role: string, path: string) {

    const allowedPaths = rolePermissions[role]

    if (!allowedPaths) return false

    return allowedPaths.some((allowed) =>
        path.startsWith(allowed)
    )

}