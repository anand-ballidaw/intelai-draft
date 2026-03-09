"use client"

import { useState } from "react"
import { useHRStore } from "@/stores/hr-store"

export default function EmployeeForm() {

    const { addEmployee } = useHRStore()

    const [name, setName] = useState("")
    const [role, setRole] = useState("teacher")
    const [department, setDepartment] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addEmployee({

            id: Date.now().toString(),

            name,

            role: role as any,

            department,

            phone

        })

        setName("")
        setDepartment("")
        setPhone("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 rounded w-full"
            >

                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
                <option value="driver">Driver</option>
                <option value="finance">Finance</option>
                <option value="hr">HR</option>
                <option value="staff">Staff</option>

            </select>

            <input
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Employee
            </button>

        </form>

    )

}