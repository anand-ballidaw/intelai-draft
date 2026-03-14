"use client"

import LeadForm from "@/components/admissions/LeadForm"
import LeadList from "@/components/admissions/LeadList"
import { useAdmissionsStore } from "@/stores/admissions-store"

export default function AdmissionsPage() {

    const { leads } = useAdmissionsStore()

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Marketing & Admissions
            </h1>

            <LeadForm />

            <LeadList leads={leads} />

        </div>

    )

}