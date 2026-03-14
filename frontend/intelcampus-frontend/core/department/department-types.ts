export type DepartmentType =
    | "academic"
    | "library"
    | "laboratory"
    | "store"
    | "canteen"
    | "transport"
    | "finance"
    | "hr"
    | "marketing"
    | "admissions"
    | "administration"

export interface Department {
    id: string
    name: string
    type: DepartmentType

    hodId?: string

    staffIds: string[]

    createdAt: string
}

export const DEFAULT_DEPARTMENTS: DepartmentType[] = [
    "academic",
    "library",
    "laboratory",
    "store",
    "canteen",
    "transport",
    "finance",
    "hr",
    "marketing",
    "admissions",
    "administration"
]