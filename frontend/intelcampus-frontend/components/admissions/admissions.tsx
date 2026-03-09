"use client"

import { useState } from "react"
import { useLeadStore } from "@/stores/lead-store"

export default function LeadForm() {

    const { addLead } = useLeadStore()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [interestedClass, setInterestedClass] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addLead({

            id: Date.now().toString(),

            name,
            phone,
            email,

            source: "website",

            interestedClass,

            status: "new",

            createdAt: new Date().toISOString()

        })

        setName("")
        setPhone("")
        setEmail("")
        setInterestedClass("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

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
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Interested Class"
                value={interestedClass}
                onChange={(e) => setInterestedClass(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Lead
            </button>

        </form>

    )

}