import {
    InstitutionSettings,
    BrandingSettings,
    FeatureFlags
} from "./settings-types"

export class SettingsEngine {

    static createSettings(
        tenantId: string
    ): InstitutionSettings {

        return {

            tenantId,

            branding: {},

            features: {},

            updatedAt: new Date().toISOString()

        }

    }

    static updateBranding(
        settings: InstitutionSettings,
        branding: BrandingSettings
    ): InstitutionSettings {

        return {

            ...settings,

            branding: {
                ...settings.branding,
                ...branding
            },

            updatedAt: new Date().toISOString()

        }

    }

    static updateFeatures(
        settings: InstitutionSettings,
        features: FeatureFlags
    ): InstitutionSettings {

        return {

            ...settings,

            features: {
                ...settings.features,
                ...features
            },

            updatedAt: new Date().toISOString()

        }

    }

    static isFeatureEnabled(
        settings: InstitutionSettings,
        feature: keyof FeatureFlags
    ): boolean {

        return Boolean(settings.features[feature])

    }

}