"use client"

import { useEffect } from "react"
import { useEmployeeStore } from "../store/employee.store"

export default function EmployeeList() {

    const { employees, fetchEmployees } = useEmployeeStore()

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (

        <div className="p-6">

            <h2 className="text-xl font-semibold mb-4">
                Employees
            </h2>

            <div className="space-y-3">

                {employees.map((employee) => (

                    <div
                        key={employee.id}
                        className="border rounded-lg p-4"
                    >

                        <h3 className="font-semibold">
                            {employee.firstName} {employee.lastName}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Role: {employee.role}
                        </p>

                        <p className="text-sm">
                            Email: {employee.email}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    )
}