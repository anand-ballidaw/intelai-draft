"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateMeetingPage() {

    const router = useRouter()

    const [form, setForm] = useState({
        title: "",
        department: "",
        date: "",
        location: ""
    })

    function handleChange(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        console.log("Meeting created:", form)

        router.push("/meetings")
    }

    return (
        <div className="p-6 max-w-lg">

            <h1 className="text-2xl font-bold mb-6">Create Meeting</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="title"
                    placeholder="Meeting Title"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="department"
                    placeholder="Department"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="date"
                    placeholder="Date & Time"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="location"
                    placeholder="Meeting Location"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Create Meeting
                </button>

            </form>

        </div>
    )
}