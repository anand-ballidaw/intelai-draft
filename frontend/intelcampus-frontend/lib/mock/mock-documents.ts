export interface DocumentItem {
    id: string
    title: string
    owner: string
    category: string
    date: string
}

export const mockDocuments: DocumentItem[] = [
    {
        id: "1",
        title: "Student Admission Form",
        owner: "Arjun Kumar",
        category: "Student",
        date: "2026-03-01",
    },
    {
        id: "2",
        title: "Staff Contract",
        owner: "Dr. Sharma",
        category: "Staff",
        date: "2026-02-15",
    },
    {
        id: "3",
        title: "Physics Assignment",
        owner: "Class 10-A",
        category: "Academic",
        date: "2026-03-05",
    },
]