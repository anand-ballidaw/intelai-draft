"use client"

import React, { useState } from "react"
import { DepartmentEngine } from "@/core/department/department-engine"
import { Department, DepartmentType } from "@/core/department/department-types"

interface DepartmentFormProps {
    onCreate: (department: Department) => void
}

export default function DepartmentForm({ onCreate }: DepartmentFormProps) {

    const [name, setName] = useState("")
    const [type, setType] = useState<DepartmentType>("academic")
    const [hodId, setHodId] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const dept = DepartmentEngine.createDepartment(
            name,
            type,
            hodId || undefined
        )

        onCreate(dept)

        setName("")
        setHodId("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Create Department
            </h2>

            <div className="mb-3">
                <label className="block text-sm mb-1">
                    Department Name
                </label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <label className="block text-sm mb-1">
                    Department Type
                </label>

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value as DepartmentType)}
                    className="w-full border rounded px-3 py-2"
                >

                    <option value="academic">Academic</option>
                    <option value="library">Library</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="store">Store</option>
                    <option value="canteen">Canteen</option>
                    <option value="transport">Transport</option>
                    <option value="finance">Finance</option>
                    <option value="hr">HR</option>
                    <option value="marketing">Marketing</option>
                    <option value="admissions">Admissions</option>
                    <option value="administration">Administration</option>

                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">
                    HOD User ID
                </label>

                <input
                    type="text"
                    value={hodId}
                    onChange={(e) => setHodId(e.target.value)}
                    placeholder="optional"
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Create Department
            </button>

        </form>

    )

}