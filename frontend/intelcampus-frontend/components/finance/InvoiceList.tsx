"use client"

import React from "react"
import InvoiceCard, { Invoice } from "./InvoiceCard"

interface InvoiceListProps {
    invoices: Invoice[]
}

export default function InvoiceList({ invoices }: InvoiceListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {invoices.map((invoice) => (

                <InvoiceCard
                    key={invoice.id}
                    invoice={invoice}
                />

            ))}

        </div>

    )

}