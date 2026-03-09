"use client"

import PaymentTable from "../components/PaymentTable"

export default function PaymentsPage() {
    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Payment Records
            </h1>

            <PaymentTable />

        </div>
    )
}