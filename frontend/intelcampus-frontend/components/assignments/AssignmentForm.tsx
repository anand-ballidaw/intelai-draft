"use client"

import { useState } from "react"
import { useAssignmentStore } from "@/stores/assignment-store"

export default function AssignmentForm() {

    const { createAssignment } = useAssignmentStore()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [className, setClassName] = useState("")
    const [teacher, setTeacher] = useState("")
    const [dueDate, setDueDate] = useState("")

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        createAssignment({

            id: Date.now().toString(),

            title,

            description,

            className,

            teacher,

            dueDate

        })

        setTitle("")
        setDescription("")
        setClassName("")
        setTeacher("")
        setDueDate("")

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-3">

            <input
                placeholder="Assignment Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Create Assignment
            </button>

        </form>

    )

}