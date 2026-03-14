export interface Student {

    id: string

    name: string

    className?: string

    parentName?: string

    email?: string

    status: "active" | "inactive"

    createdAt: string

}