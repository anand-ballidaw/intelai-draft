import { UserRole } from "@/lib/auth/auth-client"

export interface NavItem {
    label: string
    href: string
    icon?: string
}

export type RoleNavigation = Record<UserRole, NavItem[]>