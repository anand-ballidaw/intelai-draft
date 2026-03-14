import { Tenant, InstitutionType } from "./tenant-types"
import { ModuleKey } from "../modules/module-registry"

export class TenantEngine {

    static createTenant(
        name: string,
        type: InstitutionType,
        modules: ModuleKey[]
    ): Tenant {

        return {

            id: crypto.randomUUID(),

            name,

            type,

            campuses: [],

            enabledModules: modules,

            createdAt: new Date().toISOString()

        }

    }

    static addCampus(
        tenant: Tenant,
        campusName: string
    ): Tenant {

        if (tenant.campuses.includes(campusName)) {
            return tenant
        }

        return {

            ...tenant,

            campuses: [...tenant.campuses, campusName]

        }

    }

    static removeCampus(
        tenant: Tenant,
        campusName: string
    ): Tenant {

        return {

            ...tenant,

            campuses: tenant.campuses.filter(c => c !== campusName)

        }

    }

    static isModuleEnabled(
        tenant: Tenant,
        module: ModuleKey
    ): boolean {

        return tenant.enabledModules.includes(module)

    }

}