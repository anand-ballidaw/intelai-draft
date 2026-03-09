"use client"

import FeeForm from "@/components/finance/FeeForm"
import FeeTable from "@/components/finance/FeeTable"

export default function FinancePage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Finance & Fee Management
            </h1>

            <FeeForm />

            <FeeTable />

        </div>

    )

}