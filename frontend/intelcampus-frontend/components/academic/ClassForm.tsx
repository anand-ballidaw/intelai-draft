"use client"

import { useState } from "react"
import { useAcademicStore } from "@/stores/academic-store"

export default function ClassForm() {

    const { addClass } = useAcademicStore()

    const [name, setName] = useState("")
    const [section, setSection] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addClass({
            id: Date.now().toString(),
            name,
            section
        })

        setName("")
        setSection("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Class Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Class
            </button>

        </form>

    )

}