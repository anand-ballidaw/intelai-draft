"use client"

import { useEffect } from "react"
import { useFinanceStore } from "@/modules/finance/finance.store"
import InvoiceCard from "@/modules/finance/components/InvoiceCard"

export default function FinancePage() {

    const { invoices, loadInvoices } = useFinanceStore()

    useEffect(() => {

        loadInvoices()

    }, [])

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Finance
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {invoices.map((invoice) => (

                    <InvoiceCard
                        key={invoice.id}
                        invoice={invoice}
                    />

                ))}

            </div>

        </div>

    )

}