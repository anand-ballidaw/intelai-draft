"use client"

import AssignmentForm from "@/components/assignments/AssignmentForm"
import AssignmentList from "@/components/assignments/AssignmentList"

export default function AssignmentsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Assignment Management
            </h1>

            <AssignmentForm />

            <AssignmentList />

        </div>

    )

}