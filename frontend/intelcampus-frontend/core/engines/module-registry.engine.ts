export interface PlatformModule {

    id: string

    name: string

    route: string

    icon?: string

    roles?: string[]

}

class ModuleRegistry {

    private modules: PlatformModule[] = []

    register(module: PlatformModule) {

        const exists = this.modules.find(m => m.id === module.id)

        if (!exists) {
            this.modules.push(module)
        }

    }

    getModules(): PlatformModule[] {

        return this.modules

    }

    getModuleById(id: string): PlatformModule | undefined {

        return this.modules.find(m => m.id === id)

    }

}

export const moduleRegistry = new ModuleRegistry()