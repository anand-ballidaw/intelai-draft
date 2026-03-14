"use client"

import React from "react"
import DepartmentCard from "./DepartmentCard"
import { Department } from "@/core/department/department-types"

interface DepartmentListProps {
    departments: Department[]
    onUpdate: (department: Department) => void
}

export default function DepartmentList({
    departments,
    onUpdate
}: DepartmentListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {departments.map((dept) => (

                <DepartmentCard
                    key={dept.id}
                    department={dept}
                    onUpdate={onUpdate}
                />

            ))}

        </div>

    )

}