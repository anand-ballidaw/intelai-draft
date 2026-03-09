"use client"

import { useState } from "react"
import { useSmartClassStore } from "@/stores/smartclass-store"

export default function CourseForm() {

    const { addCourse } = useSmartClassStore()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [teacher, setTeacher] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addCourse({

            id: Date.now().toString(),

            title,

            description,

            teacher

        })

        setTitle("")
        setDescription("")
        setTeacher("")

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <textarea
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Course
            </button>

        </form>

    )

}