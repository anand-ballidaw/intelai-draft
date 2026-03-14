"use client"

import React, { useState } from "react"
import { Visitor } from "./VisitorCard"

interface VisitorFormProps {
    onCreate: (visitor: Visitor) => void
}

export default function VisitorForm({ onCreate }: VisitorFormProps) {

    const [name, setName] = useState("")
    const [purpose, setPurpose] = useState("")
    const [host, setHost] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const visitor: Visitor = {

            id: crypto.randomUUID(),

            name,

            purpose,

            host,

            entryTime: new Date().toLocaleTimeString()

        }

        onCreate(visitor)

        setName("")
        setPurpose("")
        setHost("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Register Visitor
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Visitor Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Purpose of Visit"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Host (Teacher/Staff)"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Register Visitor
            </button>

        </form>

    )

}