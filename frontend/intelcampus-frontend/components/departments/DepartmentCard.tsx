"use client"

import React from "react"
import { Department } from "@/core/department/department-types"
import DepartmentStaffManager from "./DepartmentStaffManager"

interface DepartmentCardProps {
    department: Department
    onUpdate: (department: Department) => void
}

export default function DepartmentCard({
    department,
    onUpdate
}: DepartmentCardProps) {

    return (

        <div className="border rounded-lg p-4 shadow-sm bg-white">

            <h3 className="text-lg font-semibold">
                {department.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                Type: {department.type}
            </p>

            <p className="text-sm text-gray-500 mt-1">
                HOD: {department.hodId ?? "Not Assigned"}
            </p>

            <p className="text-sm text-gray-500 mt-1">
                Staff Count: {department.staffIds.length}
            </p>

            <DepartmentStaffManager
                department={department}
                onUpdate={onUpdate}
            />

        </div>

    )

}