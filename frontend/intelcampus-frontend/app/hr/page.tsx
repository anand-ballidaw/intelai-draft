"use client"

import EmployeeForm from "@/components/hr/EmployeeForm"
import LeaveTable from "@/components/hr/LeaveTable"

export default function HRPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                HR Management
            </h1>

            <EmployeeForm />

            <LeaveTable />

        </div>

    )

}