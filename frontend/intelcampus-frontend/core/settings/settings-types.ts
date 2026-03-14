export interface BrandingSettings {

    logoUrl?: string

    themeColor?: string

    institutionName?: string

}

export interface FeatureFlags {

    enableSmartClass?: boolean

    enableTransportTracking?: boolean

    enableAnalytics?: boolean

    enableMarketing?: boolean

}

export interface InstitutionSettings {

    tenantId: string

    branding: BrandingSettings

    features: FeatureFlags

    updatedAt: string

}