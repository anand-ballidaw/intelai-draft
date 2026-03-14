export type IntegrationType =
    | "payment_gateway"
    | "sms_gateway"
    | "email_service"
    | "whatsapp_service"
    | "biometric_device"
    | "gps_device"
    | "government_api"

export interface IntegrationProvider {

    id: string

    name: string

    type: IntegrationType

    enabled: boolean

    config?: Record<string, any>

}

export interface IntegrationEvent {

    providerId: string

    eventType: string

    payload?: Record<string, any>

    createdAt: string

}