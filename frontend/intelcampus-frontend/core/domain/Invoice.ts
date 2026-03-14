export type InvoiceStatus = "pending" | "paid"

export interface Invoice {

    id: string

    studentName: string

    amount: number

    dueDate: string

    status: InvoiceStatus

    createdAt: string

}