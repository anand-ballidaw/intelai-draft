export interface SearchResult {

    id: string

    title: string

    description?: string

    type:
    | "student"
    | "teacher"
    | "employee"
    | "course"
    | "lead"
    | "visitor"
    | "vehicle"

    link: string

}