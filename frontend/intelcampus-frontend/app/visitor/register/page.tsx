"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterVisitorPage() {

    const router = useRouter()

    const [form, setForm] = useState({
        name: "",
        phone: "",
        purpose: "",
        department: "",
        person: ""
    })

    function handleChange(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        console.log("Visitor registered:", form)

        router.push("/visitor")
    }

    return (
        <div className="p-6 max-w-lg">

            <h1 className="text-2xl font-bold mb-6">Register Visitor</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="name"
                    placeholder="Visitor Name"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="purpose"
                    placeholder="Purpose of Visit"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="department"
                    placeholder="Department Visiting"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <input
                    name="person"
                    placeholder="Person to Meet"
                    className="border p-2 w-full"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Register Visitor
                </button>

            </form>

        </div>
    )
}