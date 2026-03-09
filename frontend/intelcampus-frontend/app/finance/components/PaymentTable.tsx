"use client"

import { useState } from "react"

interface Payment {
    id: number
    studentName: string
    className: string
    amount: number
    type: string
    date: string
}

export default function PaymentTable() {

    const [payments] = useState<Payment[]>([
        {
            id: 1,
            studentName: "Rahul Sharma",
            className: "Class 8",
            amount: 15000,
            type: "Tuition Fee",
            date: "2026-03-01"
        },
        {
            id: 2,
            studentName: "Anjali Verma",
            className: "Class 10",
            amount: 5000,
            type: "Transport Fee",
            date: "2026-03-02"
        }
    ])

    return (
        <table className="w-full border">

            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border">Student</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Amount</th>
                    <th className="p-2 border">Type</th>
                    <th className="p-2 border">Date</th>
                </tr>
            </thead>

            <tbody>
                {payments.map((payment) => (
                    <tr key={payment.id}>
                        <td className="p-2 border">{payment.studentName}</td>
                        <td className="p-2 border">{payment.className}</td>
                        <td className="p-2 border">₹{payment.amount}</td>
                        <td className="p-2 border">{payment.type}</td>
                        <td className="p-2 border">{payment.date}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}