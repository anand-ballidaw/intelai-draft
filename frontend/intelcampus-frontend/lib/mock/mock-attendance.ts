export interface AttendanceRecord {
    id: string
    name: string
    role: string
    date: string
    status: "Present" | "Absent"
}

export const mockAttendance: AttendanceRecord[] = [
    {
        id: "1",
        name: "Arjun Kumar",
        role: "Student",
        date: "2026-03-06",
        status: "Present",
    },
    {
        id: "2",
        name: "Sneha Patel",
        role: "Student",
        date: "2026-03-06",
        status: "Absent",
    },
    {
        id: "3",
        name: "Dr. Sharma",
        role: "Staff",
        date: "2026-03-06",
        status: "Present",
    },
]