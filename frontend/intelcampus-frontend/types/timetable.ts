export interface TimetableEntry {

    id: string

    className: string

    subject: string

    teacher: string

    room: string

    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

    period: number

}