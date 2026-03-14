import { ModuleKey } from "./module-registry"

export interface InstitutionModules {
    institutionId: string
    enabledModules: ModuleKey[]
}

export class ModuleEngine {

    static isModuleEnabled(
        modules: InstitutionModules,
        moduleKey: ModuleKey
    ): boolean {

        return modules.enabledModules.includes(moduleKey)

    }

    static enableModule(
        modules: InstitutionModules,
        moduleKey: ModuleKey
    ): InstitutionModules {

        if (modules.enabledModules.includes(moduleKey)) {
            return modules
        }

        return {
            ...modules,
            enabledModules: [...modules.enabledModules, moduleKey]
        }

    }

    static disableModule(
        modules: InstitutionModules,
        moduleKey: ModuleKey
    ): InstitutionModules {

        return {
            ...modules,
            enabledModules: modules.enabledModules.filter(
                m => m !== moduleKey
            )
        }

    }

    static getEnabledModules(
        modules: InstitutionModules
    ): ModuleKey[] {

        return modules.enabledModules

    }

}