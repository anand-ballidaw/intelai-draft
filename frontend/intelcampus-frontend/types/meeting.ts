export interface Meeting {

    id: string

    visitorName: string

    meetingWith: string

    department: string

    purpose: string

    date: string

    time: string

    status: "pending" | "approved" | "rejected" | "completed"

}