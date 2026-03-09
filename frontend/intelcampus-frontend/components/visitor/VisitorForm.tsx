"use client"

import { useState } from "react"
import { useVisitorStore } from "@/stores/visitor-store"

export default function VisitorForm() {

    const { addVisitor } = useVisitorStore()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [purpose, setPurpose] = useState("")
    const [meetingWith, setMeetingWith] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        addVisitor({

            id: Date.now().toString(),

            name,
            phone,
            purpose,
            meetingWith,

            checkInTime: new Date().toISOString(),

            status: "checked-in"

        })

        setName("")
        setPhone("")
        setPurpose("")
        setMeetingWith("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Visitor Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Meeting With"
                value={meetingWith}
                onChange={(e) => setMeetingWith(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Check In Visitor
            </button>

        </form>

    )

}