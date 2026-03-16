export type LeadStatus =
    | "new"
    | "followup"
    | "converted"

export interface Lead {

    id: string

    name: string

    phone: string

    course: string

    status: LeadStatus

    createdAt: string

}