export interface Department {
    id: string
    name: string
}

export interface ClassItem {
    id: string
    name: string
    section: string
}

export interface Subject {
    id: string
    name: string
    department: string
}

export const mockDepartments: Department[] = [
    { id: "1", name: "Science" },
    { id: "2", name: "Mathematics" },
    { id: "3", name: "Humanities" },
]

export const mockClasses: ClassItem[] = [
    { id: "1", name: "10", section: "A" },
    { id: "2", name: "10", section: "B" },
    { id: "3", name: "9", section: "A" },
]

export const mockSubjects: Subject[] = [
    { id: "1", name: "Physics", department: "Science" },
    { id: "2", name: "Chemistry", department: "Science" },
    { id: "3", name: "Algebra", department: "Mathematics" },
]