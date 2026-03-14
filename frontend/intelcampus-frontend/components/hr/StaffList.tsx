"use client"

import React from "react"
import StaffCard, { StaffMember } from "./StaffCard"

interface StaffListProps {
    staffMembers: StaffMember[]
}

export default function StaffList({ staffMembers }: StaffListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {staffMembers.map((staff) => (

                <StaffCard
                    key={staff.id}
                    staff={staff}
                />

            ))}

        </div>

    )

}