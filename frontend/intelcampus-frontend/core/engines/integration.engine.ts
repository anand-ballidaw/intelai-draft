export interface IntegrationProvider {

    id: string

    name: string

    execute: (payload: any) => Promise<any>

}

class IntegrationEngine {

    private providers: Record<string, IntegrationProvider> = {}

    register(provider: IntegrationProvider) {

        this.providers[provider.id] = provider

    }

    async execute(providerId: string, payload: any) {

        const provider = this.providers[providerId]

        if (!provider) {

            throw new Error(`Integration provider not found: ${providerId}`)

        }

        return provider.execute(payload)

    }

    getProviders(): IntegrationProvider[] {

        return Object.values(this.providers)

    }

}

export const integrationEngine = new IntegrationEngine()