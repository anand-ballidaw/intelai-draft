"use client"

import React from "react"

export interface Invoice {
    id: string
    studentName: string
    amount: number
    status: "paid" | "pending"
    dueDate: string
}

interface InvoiceCardProps {
    invoice: Invoice
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {invoice.studentName}
            </h3>

            <p className="text-sm text-gray-500">
                Amount: ₹{invoice.amount}
            </p>

            <p className="text-sm text-gray-500">
                Due Date: {invoice.dueDate}
            </p>

            <p
                className={`text-sm font-medium mt-1 ${invoice.status === "paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
            >
                Status: {invoice.status}
            </p>

        </div>

    )

}