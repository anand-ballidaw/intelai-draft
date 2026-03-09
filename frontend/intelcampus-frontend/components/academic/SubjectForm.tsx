"use client"

import { useState } from "react"
import { useAcademicStore } from "@/stores/academic-store"

export default function SubjectForm() {

    const { addSubject } = useAcademicStore()

    const [name, setName] = useState("")
    const [classId, setClassId] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addSubject({
            id: Date.now().toString(),
            name,
            classId
        })

        setName("")
        setClassId("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Subject Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Class ID"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-green-600 text-white px-4 py-2 rounded">
                Add Subject
            </button>

        </form>

    )

}