export class PlatformOrchestrator {

    private initialized = false

    initialize() {

        if (this.initialized) return

        console.log("Starting IntelCampus Platform...")

        this.loadModules()
        this.loadWorkflows()
        this.loadIntegrations()

        this.initialized = true

        console.log("IntelCampus Platform Initialized")

    }

    private loadModules() {

        console.log("Loading modules...")

        import("@/core/modules/platform-modules")

    }

    private loadWorkflows() {

        console.log("Loading workflows...")

        import("@/core/workflows/platform-workflows")

    }

    private loadIntegrations() {

        console.log("Loading integrations...")

        import("@/integrations/email.integration")
        import("@/integrations/whatsapp.integration")

    }

}

export const platformOrchestrator = new PlatformOrchestrator()