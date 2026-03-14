export type LeadStatus = "new" | "followup" | "converted"

export interface Lead {

    id: string

    name: string

    course: string

    phone: string

    status: LeadStatus

    createdAt: string

}