export interface Exam {
    id: string
    name: string
    class: string
    date: string
}

export interface Result {
    id: string
    student: string
    exam: string
    marks: number
    percentage: number
    status: "Pass" | "Fail"
}

export const mockExams: Exam[] = [
    {
        id: "1",
        name: "Mid Term Exam",
        class: "10-A",
        date: "2026-03-20",
    },
    {
        id: "2",
        name: "Final Exam",
        class: "10-A",
        date: "2026-04-10",
    },
]

export const mockResults: Result[] = [
    {
        id: "1",
        student: "Arjun Kumar",
        exam: "Mid Term Exam",
        marks: 85,
        percentage: 85,
        status: "Pass",
    },
    {
        id: "2",
        student: "Sneha Patel",
        exam: "Mid Term Exam",
        marks: 32,
        percentage: 32,
        status: "Fail",
    },
]