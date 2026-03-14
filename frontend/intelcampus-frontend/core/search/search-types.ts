export type SearchEntityType =
    | "student"
    | "teacher"
    | "course"
    | "lesson"
    | "department"
    | "invoice"
    | "transport_route"
    | "admission_enquiry"

export interface SearchRecord {

    id: string

    type: SearchEntityType

    title: string

    description?: string

    link?: string

}

export interface SearchResult {

    query: string

    results: SearchRecord[]

}