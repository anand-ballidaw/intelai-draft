"use client"

import React from "react"

export interface StaffMember {
    id: string
    name: string
    role: string
    department?: string
    email?: string
}

interface StaffCardProps {
    staff: StaffMember
}

export default function StaffCard({ staff }: StaffCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {staff.name}
            </h3>

            <p className="text-sm text-gray-500">
                Role: {staff.role}
            </p>

            <p className="text-sm text-gray-500">
                Department: {staff.department ?? "Not Assigned"}
            </p>

            <p className="text-sm text-gray-500">
                Email: {staff.email ?? "Not Provided"}
            </p>

        </div>

    )

}