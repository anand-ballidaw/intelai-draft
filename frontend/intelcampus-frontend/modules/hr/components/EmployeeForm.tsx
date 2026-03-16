"use client"

import { useState } from "react"
import { useEmployeeStore } from "../store/employee.store"

export default function EmployeeForm() {

    const { createEmployee } = useEmployeeStore()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("PROFESSOR")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        await createEmployee({
            firstName,
            lastName,
            email,
            role,
            joiningDate: new Date().toISOString(),
            institutionId: "demo-institution"
        })

        setFirstName("")
        setLastName("")
        setEmail("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 border rounded-lg"
        >

            <h2 className="text-lg font-semibold">
                Add Employee
            </h2>

            <input
                className="w-full border p-2 rounded"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <select
                className="w-full border p-2 rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >

                <option value="PROFESSOR">Professor</option>
                <option value="LECTURER">Lecturer</option>
                <option value="ADMIN">Admin</option>
                <option value="HR">HR</option>

            </select>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                type="submit"
            >
                Create Employee
            </button>

        </form>
    )
}