export interface FeeRecord {

    id: string

    studentName: string

    className: string

    totalFee: number

    paidAmount: number

    dueAmount: number

    status: "paid" | "partial" | "due"

}

export interface Payment {

    id: string

    studentId: string

    amount: number

    method: "cash" | "online" | "upi"

    date: string

}