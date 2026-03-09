"use client"

import { useState } from "react"
import { useAnnouncementStore } from "@/stores/announcement-store"

export default function AnnouncementForm() {

    const { addAnnouncement } = useAnnouncementStore()

    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [target, setTarget] = useState("all")

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        addAnnouncement({

            id: Date.now().toString(),

            title,

            message,

            author: "Admin",

            target: target as any,

            createdAt: new Date().toISOString()

        })

        setTitle("")
        setMessage("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Announcement Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <textarea
                placeholder="Announcement Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="border p-2 rounded w-full"
            >

                <option value="all">All</option>
                <option value="students">Students</option>
                <option value="teachers">Teachers</option>
                <option value="parents">Parents</option>
                <option value="staff">Staff</option>

            </select>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Publish Announcement
            </button>

        </form>

    )

}