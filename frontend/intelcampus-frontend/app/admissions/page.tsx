"use client"

import LeadForm from "@/components/admissions/LeadForm"
import LeadTable from "@/components/admissions/LeadTable"

export default function AdmissionsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Admissions & Lead Management
            </h1>

            <LeadForm />

            <LeadTable />

        </div>

    )

}