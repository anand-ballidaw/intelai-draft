"use client"

import React, { useState } from "react"
import { DepartmentEngine } from "@/core/department/department-engine"
import { Department } from "@/core/department/department-types"

interface DepartmentStaffManagerProps {
    department: Department
    onUpdate: (department: Department) => void
}

export default function DepartmentStaffManager({
    department,
    onUpdate
}: DepartmentStaffManagerProps) {

    const [staffId, setStaffId] = useState("")

    const handleAddStaff = () => {

        if (!staffId) return

        const updated = DepartmentEngine.addStaff(department, staffId)

        onUpdate(updated)

        setStaffId("")
    }

    const handleRemoveStaff = (id: string) => {

        const updated = DepartmentEngine.removeStaff(department, id)

        onUpdate(updated)
    }

    return (

        <div className="border rounded-lg p-4 bg-white mt-4">

            <h4 className="font-semibold mb-3">
                Department Staff
            </h4>

            <div className="flex gap-2 mb-3">

                <input
                    type="text"
                    placeholder="Enter Staff User ID"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    className="border rounded px-3 py-2 flex-1"
                />

                <button
                    onClick={handleAddStaff}
                    className="bg-green-600 text-white px-3 py-2 rounded"
                >
                    Add Staff
                </button>

            </div>

            <div className="space-y-2">

                {department.staffIds.map((id) => (

                    <div
                        key={id}
                        className="flex justify-between items-center border px-3 py-2 rounded"
                    >

                        <span>{id}</span>

                        <button
                            onClick={() => handleRemoveStaff(id)}
                            className="text-red-600"
                        >
                            Remove
                        </button>

                    </div>

                ))}

                {department.staffIds.length === 0 && (
                    <p className="text-sm text-gray-500">
                        No staff assigned
                    </p>
                )}

            </div>

        </div>

    )

}