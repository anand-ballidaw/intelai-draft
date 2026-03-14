"use client"

import React, { useState } from "react"
import { StaffMember } from "./StaffCard"

interface StaffFormProps {
    onCreate: (staff: StaffMember) => void
}

export default function StaffForm({ onCreate }: StaffFormProps) {

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [department, setDepartment] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const staff: StaffMember = {

            id: crypto.randomUUID(),

            name,

            role,

            department,

            email

        }

        onCreate(staff)

        setName("")
        setRole("")
        setDepartment("")
        setEmail("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Add Staff Member
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Role (Teacher, HR, Driver etc.)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Staff
            </button>

        </form>

    )

}