"use client"

import React, { useState } from "react"
import { Student } from "./StudentCard"

interface StudentFormProps {
    onCreate: (student: Student) => void
}

export default function StudentForm({ onCreate }: StudentFormProps) {

    const [name, setName] = useState("")
    const [className, setClassName] = useState("")
    const [parentName, setParentName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const student: Student = {

            id: crypto.randomUUID(),

            name,

            className,

            parentName,

            email

        }

        onCreate(student)

        setName("")
        setClassName("")
        setParentName("")
        setEmail("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Register Student
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Class / Course"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Parent Name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
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
                Add Student
            </button>

        </form>

    )

}