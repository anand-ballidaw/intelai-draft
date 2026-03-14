"use client"

import React, { useState } from "react"
import InvoiceForm from "@/components/finance/InvoiceForm"
import InvoiceList from "@/components/finance/InvoiceList"
import { Invoice } from "@/components/finance/InvoiceCard"

export default function FinancePage() {

    const [invoices, setInvoices] = useState<Invoice[]>([])

    const handleCreateInvoice = (invoice: Invoice) => {

        setInvoices([...invoices, invoice])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Finance & Fee Management
            </h1>

            <InvoiceForm onCreate={handleCreateInvoice} />

            <InvoiceList invoices={invoices} />

        </div>

    )

}