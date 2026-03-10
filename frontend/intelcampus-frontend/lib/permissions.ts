import { rolePermissions } from "@/config/permissions"

export function hasPermission(role: string, module: string) {

    const permissions = rolePermissions[role as keyof typeof rolePermissions]

    if (!permissions) {
        return false
    }

    return permissions.includes(module)

}