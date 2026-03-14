"use client"

import React, { useState } from "react"
import StaffForm from "@/components/hr/StaffForm"
import StaffList from "@/components/hr/StaffList"
import { StaffMember } from "@/components/hr/StaffCard"

export default function HRPage() {

    const [staffMembers, setStaffMembers] = useState<StaffMember[]>([])

    const handleCreateStaff = (staff: StaffMember) => {

        setStaffMembers([...staffMembers, staff])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                HR Staff Directory
            </h1>

            <StaffForm onCreate={handleCreateStaff} />

            <StaffList staffMembers={staffMembers} />

        </div>

    )

}