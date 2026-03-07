export interface Student {
    id: string
    name: string
    class: string
    email: string
}

export interface Staff {
    id: string
    name: string
    department: string
    email: string
}

export interface Parent {
    id: string
    name: string
    student: string
    phone: string
}

export interface Driver {
    id: string
    name: string
    vehicle: string
    phone: string
}

export const mockStudents: Student[] = [
    { id: "1", name: "Arjun Kumar", class: "10-A", email: "arjun@test.com" },
    { id: "2", name: "Sneha Patel", class: "9-B", email: "sneha@test.com" },
]

export const mockStaff: Staff[] = [
    { id: "1", name: "Dr. Sharma", department: "Physics", email: "sharma@test.com" },
    { id: "2", name: "Prof. Anita", department: "Math", email: "anita@test.com" },
]

export const mockParents: Parent[] = [
    { id: "1", name: "Raj Kumar", student: "Arjun Kumar", phone: "9999999999" },
]

export const mockDrivers: Driver[] = [
    { id: "1", name: "Ravi", vehicle: "Bus KA01-1234", phone: "8888888888" },
]