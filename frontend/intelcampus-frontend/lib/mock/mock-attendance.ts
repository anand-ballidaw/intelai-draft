export interface AttendanceRecord {

    id: string
    name: string
    class: string
    section: string
    status: "Present" | "Absent"

}

export const mockAttendance: AttendanceRecord[] = [

    {
        id: "1",
        name: "Arjun Kumar",
        class: "10",
        section: "A",
        status: "Present",
    },

    {
        id: "2",
        name: "Sneha Patel",
        class: "10",
        section: "A",
        status: "Absent",
    },

]