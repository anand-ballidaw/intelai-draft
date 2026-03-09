"use client"

import { useState } from "react"

export default function LeadForm() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [course, setCourse] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log({
            name,
            phone,
            course
        })

        setName("")
        setPhone("")
        setCourse("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

            <input
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Interested Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Lead
            </button>

        </form>

    )
}