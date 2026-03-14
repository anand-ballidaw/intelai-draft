"use client"

import React, { useState } from "react"
import DepartmentList from "@/components/departments/DepartmentList"
import DepartmentForm from "@/components/departments/DepartmentForm"
import { Department } from "@/core/department/department-types"

export default function DepartmentsPage() {

    const [departments, setDepartments] = useState<Department[]>([])

    const handleCreateDepartment = (department: Department) => {

        setDepartments([...departments, department])

    }

    const handleUpdateDepartment = (updated: Department) => {

        const updatedList = departments.map((d) =>
            d.id === updated.id ? updated : d
        )

        setDepartments(updatedList)
    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Department Management
            </h1>

            <DepartmentForm onCreate={handleCreateDepartment} />

            <DepartmentList
                departments={departments}
                onUpdate={handleUpdateDepartment}
            />

        </div>

    )

}