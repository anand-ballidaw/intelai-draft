export interface Announcement {

    id: string

    title: string

    message: string

    author: string

    target: "all" | "students" | "teachers" | "parents" | "staff"

    createdAt: string

}