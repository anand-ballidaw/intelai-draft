"use client"

import { useState } from "react"
import { useMeetingStore } from "@/stores/meeting-store"

export default function MeetingForm() {

    const { createMeeting } = useMeetingStore()

    const [visitorName, setVisitorName] = useState("")
    const [meetingWith, setMeetingWith] = useState("")
    const [department, setDepartment] = useState("")
    const [purpose, setPurpose] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        createMeeting({

            id: Date.now().toString(),

            visitorName,
            meetingWith,
            department,
            purpose,
            date,
            time,

            status: "pending"

        })

        setVisitorName("")
        setMeetingWith("")
        setDepartment("")
        setPurpose("")
        setDate("")
        setTime("")
    }

    return (

        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                placeholder="Visitor Name"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Meeting With"
                value={meetingWith}
                onChange={(e) => setMeetingWith(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Request Meeting
            </button>

        </form>

    )

}