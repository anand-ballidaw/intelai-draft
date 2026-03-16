"use client"

import { useState } from "react"
import { useSmartClassStore } from "../store/smartclass.store"

export default function CourseForm() {

    const { createCourse } = useSmartClassStore()

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        await createCourse({
            name,
            code,
            description,
            departmentId: "demo-department",
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
                Create Course
            </h2>

            <input
                className="w-full border p-2 rounded"
                placeholder="Course Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded"
                placeholder="Course Code"
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
                Create Course
            </button>

        </form>
    )
}