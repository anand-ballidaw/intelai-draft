"use client"

import React, { useState } from "react"
import { useAdmissionsStore } from "@/stores/admissions-store"

export default function LeadForm() {

    const { addLead } = useAdmissionsStore()

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addLead({
            id: crypto.randomUUID(),
            name,
            course,
            phone,
            status: "new"
        })

        setName("")
        setCourse("")
        setPhone("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                New Admission Enquiry
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
                    placeholder="Course Interested"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Lead
            </button>

        </form>

    )

}