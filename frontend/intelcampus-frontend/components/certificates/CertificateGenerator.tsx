"use client"

import { useState } from "react"

export default function CertificateGenerator() {

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")

    function handleGenerate() {
        alert(`Certificate generated for ${name} - ${course}`)
    }

    return (

        <div className="max-w-xl space-y-4">

            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md p-2"
            />

            <input
                type="text"
                placeholder="Course Name"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border rounded-md p-2"
            />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded-md p-2"
            />

            <button
                onClick={handleGenerate}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
                Generate Certificate
            </button>

        </div>

    )

}