"use client"

import React, { useState } from "react"
import { Invoice } from "./InvoiceCard"

interface InvoiceFormProps {
    onCreate: (invoice: Invoice) => void
}

export default function InvoiceForm({ onCreate }: InvoiceFormProps) {

    const [studentName, setStudentName] = useState("")
    const [amount, setAmount] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const invoice: Invoice = {

            id: crypto.randomUUID(),

            studentName,

            amount: Number(amount),

            dueDate,

            status: "pending"

        }

        onCreate(invoice)

        setStudentName("")
        setAmount("")
        setDueDate("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Create Fee Invoice
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Create Invoice
            </button>

        </form>

    )

}