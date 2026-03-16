"use client"

import { Lead } from "@/modules/admissions/types/admissions.types"

export default function AdmissionsPage() {

    const leads: Lead[] = []

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Admissions
            </h1>

            {leads.length === 0 && (
                <p className="text-gray-500">
                    No leads yet
                </p>
            )}

        </div>

    )
}