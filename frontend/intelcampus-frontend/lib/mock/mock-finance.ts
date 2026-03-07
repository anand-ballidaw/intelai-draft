export interface Fee {
    id: string
    student: string
    amount: number
    status: "Paid" | "Pending"
}

export interface Salary {
    id: string
    staff: string
    amount: number
    month: string
}

export interface Penalty {
    id: string
    user: string
    reason: string
    amount: number
}

export const mockFees: Fee[] = [
    {
        id: "1",
        student: "Arjun Kumar",
        amount: 5000,
        status: "Paid",
    },
    {
        id: "2",
        student: "Sneha Patel",
        amount: 5000,
        status: "Pending",
    },
]

export const mockSalary: Salary[] = [
    {
        id: "1",
        staff: "Dr. Sharma",
        amount: 45000,
        month: "March",
    },
]

export const mockPenalties: Penalty[] = [
    {
        id: "1",
        user: "Arjun Kumar",
        reason: "Late library return",
        amount: 200,
    },
]