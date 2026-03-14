import { ROLE_HIERARCHY_LEVEL, Role } from "./role-hierarchy"

export class HierarchyEngine {

    static getLevel(role: Role): number {
        return ROLE_HIERARCHY_LEVEL[role] ?? 0
    }

    static isHigherRole(roleA: Role, roleB: Role): boolean {
        const levelA = this.getLevel(roleA)
        const levelB = this.getLevel(roleB)

        return levelA > levelB
    }

    static isLowerRole(roleA: Role, roleB: Role): boolean {
        const levelA = this.getLevel(roleA)
        const levelB = this.getLevel(roleB)

        return levelA < levelB
    }

    static isSameRole(roleA: Role, roleB: Role): boolean {
        return roleA === roleB
    }

    static canManage(managerRole: Role, targetRole: Role): boolean {
        const managerLevel = this.getLevel(managerRole)
        const targetLevel = this.getLevel(targetRole)

        return managerLevel > targetLevel
    }

    static canApprove(approverRole: Role, requesterRole: Role): boolean {
        const approverLevel = this.getLevel(approverRole)
        const requesterLevel = this.getLevel(requesterRole)

        return approverLevel > requesterLevel
    }

    static getRoleChain(role: Role): Role[] {
        const roleLevel = this.getLevel(role)

        return Object.entries(ROLE_HIERARCHY_LEVEL)
            .filter(([_, level]) => level > roleLevel)
            .sort((a, b) => b[1] - a[1])
            .map(([r]) => r as Role)
    }

}