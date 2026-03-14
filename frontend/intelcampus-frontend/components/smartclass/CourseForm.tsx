"use client"

import React, { useState } from "react"
import { Course } from "./CourseCard"

interface CourseFormProps {
    onCreate: (course: Course) => void
}

export default function CourseForm({ onCreate }: CourseFormProps) {

    const [title, setTitle] = useState("")
    const [instructor, setInstructor] = useState("")
    const [lessons, setLessons] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const course: Course = {

            id: crypto.randomUUID(),

            title,

            instructor,

            lessons

        }

        onCreate(course)

        setTitle("")
        setInstructor("")
        setLessons(0)
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Create Course
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Course Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Instructor"
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Number of Lessons"
                    value={lessons}
                    onChange={(e) => setLessons(Number(e.target.value))}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Create Course
            </button>

        </form>

    )

}