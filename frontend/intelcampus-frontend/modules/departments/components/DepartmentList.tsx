"use client"

import { useEffect } from "react"
import { useDepartmentStore } from "../store/department.store"

export default function DepartmentList() {

    const { departments, fetchDepartments } = useDepartmentStore()

    useEffect(() => {
        fetchDepartments()
    }, [])

    return (
        <div className="p-6">

            <h2 className="text-xl font-semibold mb-4">
                Departments
            </h2>

            <div className="space-y-3">

                {departments.map((department) => (

                    <div
                        key={department.id}
                        className="border rounded-lg p-4"
                    >

                        <h3 className="font-semibold">
                            {department.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Code: {department.code}
                        </p>

                        {department.description && (
                            <p className="text-sm mt-1">
                                {department.description}
                            </p>
                        )}

                    </div>

                ))}

            </div>

        </div>
    )
}