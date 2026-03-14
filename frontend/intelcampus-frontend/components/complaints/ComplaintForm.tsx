"use client"

import React, { useState } from "react"
import { Complaint } from "./ComplaintCard"

interface ComplaintFormProps {
    onCreate: (complaint: Complaint) => void
}

export default function ComplaintForm({ onCreate }: ComplaintFormProps) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const complaint: Complaint = {

            id: crypto.randomUUID(),

            title,

            description,

            status: "open"

        }

        onCreate(complaint)

        setTitle("")
        setDescription("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Submit Complaint
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Complaint Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <textarea
                    placeholder="Describe the issue"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Submit Complaint
            </button>

        </form>

    )

}