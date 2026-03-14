"use client"

import React from "react"
import { HierarchyEngine } from "@/core/hierarchy/hierarchy-engine"
import { Role } from "@/core/hierarchy/role-hierarchy"

interface RoleGuardProps {
    currentRole: Role
    minimumRole: Role
    children: React.ReactNode
    fallback?: React.ReactNode
}

export default function RoleGuard({
    currentRole,
    minimumRole,
    children,
    fallback = null
}: RoleGuardProps) {

    const currentLevel = HierarchyEngine.getLevel(currentRole)
    const requiredLevel = HierarchyEngine.getLevel(minimumRole)

    if (currentLevel < requiredLevel) {
        return <>{fallback}</>
    }

    return <>{children}</>
}