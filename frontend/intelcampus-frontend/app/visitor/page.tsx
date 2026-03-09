"use client"

import VisitorForm from "@/components/visitor/VisitorForm"
import VisitorTable from "@/components/visitor/VisitorTable"

export default function VisitorsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Visitor Management
            </h1>

            <VisitorForm />

            <VisitorTable />

        </div>

    )

}