"use client"

import { useState } from "react"
import { useDepartmentStore } from "../store/department.store"

export default function DepartmentForm() {

    const { createDepartment } = useDepartmentStore()

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        await createDepartment({
            name,
            code,
            description,
            institutionId: "demo-institution"
        })

        setName("")
        setCode("")
        setDescription("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 border rounded-lg"
        >

            <h2 className="text-lg font-semibold">
                Create Department
            </h2>

            <input
                className="w-full border p-2 rounded"
                placeholder="Department Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded"
                placeholder="Department Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />

            <textarea
                className="w-full border p-2 rounded"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                type="submit"
            >
                Create Department
            </button>

        </form>
    )
}