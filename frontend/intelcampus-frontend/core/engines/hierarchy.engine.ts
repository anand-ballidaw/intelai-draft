export type InstitutionRole =
    | "ceo"
    | "director"
    | "principal"
    | "dean"
    | "hod"
    | "teacher"
    | "staff"
    | "student"

interface HierarchyRule {

    role: InstitutionRole

    reportsTo?: InstitutionRole

}

class HierarchyEngine {

    private hierarchy: HierarchyRule[] = [

        { role: "ceo" },

        { role: "director", reportsTo: "ceo" },

        { role: "principal", reportsTo: "director" },

        { role: "dean", reportsTo: "principal" },

        { role: "hod", reportsTo: "dean" },

        { role: "teacher", reportsTo: "hod" },

        { role: "staff", reportsTo: "hod" },

        { role: "student", reportsTo: "teacher" }

    ]

    getManager(role: InstitutionRole): InstitutionRole | undefined {

        const rule = this.hierarchy.find(r => r.role === role)

        return rule?.reportsTo

    }

    isHigherRole(roleA: InstitutionRole, roleB: InstitutionRole): boolean {

        let current = roleB

        while (true) {

            const manager = this.getManager(current)

            if (!manager) return false

            if (manager === roleA) return true

            current = manager

        }

    }

}

export const hierarchyEngine = new HierarchyEngine()