"use client"

import React from "react"
import { PermissionEngine } from "@/core/permission/permission-engine"
import { Permission, Role } from "@/core/permission/role-permissions"

interface PermissionGuardProps {
    role: Role
    permission: Permission
    children: React.ReactNode
    fallback?: React.ReactNode
}

export default function PermissionGuard({
    role,
    permission,
    children,
    fallback = null
}: PermissionGuardProps) {

    const allowed = PermissionEngine.hasPermission(role, permission)

    if (!allowed) {
        return <>{fallback}</>
    }

    return <>{children}</>
}