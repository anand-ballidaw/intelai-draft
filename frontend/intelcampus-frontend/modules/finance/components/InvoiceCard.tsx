"use client"

import { Invoice } from "../finance.types"

interface Props {

    invoice: Invoice

}

export default function InvoiceCard({ invoice }: Props) {

    return (

        <div className="border rounded p-4 bg-white shadow-sm">

            <h3 className="font-semibold text-lg">
                {invoice.studentName}
            </h3>

            <p className="text-sm text-gray-500">
                Amount: ₹{invoice.amount}
            </p>

            <p className="text-sm text-gray-500">
                Due: {invoice.dueDate}
            </p>

            <p className="text-sm text-gray-500">
                Status: {invoice.status}
            </p>

        </div>

    )

}