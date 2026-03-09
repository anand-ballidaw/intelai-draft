export interface Visitor {

    id: string

    name: string
    phone: string
    purpose: string

    meetingWith: string

    checkInTime: string
    checkOutTime?: string

    status: "checked-in" | "checked-out"

}