import { PermissionEngine } from "./permission-engine"
import { Role } from "./role-permissions"
import { SIDEBAR_ITEMS } from "@/config/navigation/sidebar-config"

export function getSidebarItems(role: Role) {

    return SIDEBAR_ITEMS.filter(item => {

        if (!item.permission) return true

        return PermissionEngine.hasPermission(role, item.permission)

    })

}