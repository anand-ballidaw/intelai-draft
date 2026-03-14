import { IntegrationProvider, IntegrationEvent } from "./integration-types"

export class IntegrationEngine {

    static registerProvider(
        name: string,
        type: string,
        config?: Record<string, any>
    ): IntegrationProvider {

        return {

            id: crypto.randomUUID(),

            name,

            type: type as any,

            enabled: true,

            config

        }

    }

    static enableProvider(provider: IntegrationProvider): IntegrationProvider {

        return {

            ...provider,

            enabled: true

        }

    }

    static disableProvider(provider: IntegrationProvider): IntegrationProvider {

        return {

            ...provider,

            enabled: false

        }

    }

    static createIntegrationEvent(
        providerId: string,
        eventType: string,
        payload?: Record<string, any>
    ): IntegrationEvent {

        return {

            providerId,

            eventType,

            payload,

            createdAt: new Date().toISOString()

        }

    }

}