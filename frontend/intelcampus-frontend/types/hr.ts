export interface Employee {

    id: string

    name: string

    role: "teacher" | "admin" | "driver" | "finance" | "hr" | "staff"

    department: string

    phone: string

}

export interface LeaveRequest {

    id: string

    employeeName: string

    reason: string

    fromDate: string

    toDate: string

    status: "pending" | "approved" | "rejected"

}