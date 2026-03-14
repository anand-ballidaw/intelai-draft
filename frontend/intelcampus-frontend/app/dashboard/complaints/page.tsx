"use client"

import React, { useState } from "react"
import ComplaintForm from "@/components/complaints/ComplaintForm"
import ComplaintList from "@/components/complaints/ComplaintList"
import { Complaint } from "@/components/complaints/ComplaintCard"

export default function ComplaintsPage() {

    const [complaints, setComplaints] = useState<Complaint[]>([])

    const handleCreateComplaint = (complaint: Complaint) => {

        setComplaints([...complaints, complaint])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Complaint & Issue Management
            </h1>

            <ComplaintForm onCreate={handleCreateComplaint} />

            <ComplaintList complaints={complaints} />

        </div>

    )

}