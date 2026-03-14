import { ROLE_PERMISSIONS, Role, Permission } from "./role-permissions"

export class PermissionEngine {

    static hasPermission(role: Role, permission: Permission): boolean {
        const permissions = ROLE_PERMISSIONS[role]

        if (!permissions) {
            return false
        }

        return permissions.includes(permission)
    }

    static hasAnyPermission(role: Role, permissions: Permission[]): boolean {
        const rolePermissions = ROLE_PERMISSIONS[role]

        if (!rolePermissions) {
            return false
        }

        return permissions.some((p) => rolePermissions.includes(p))
    }

    static hasAllPermissions(role: Role, permissions: Permission[]): boolean {
        const rolePermissions = ROLE_PERMISSIONS[role]

        if (!rolePermissions) {
            return false
        }

        return permissions.every((p) => rolePermissions.includes(p))
    }

    static getRolePermissions(role: Role): Permission[] {
        return ROLE_PERMISSIONS[role] || []
    }
}