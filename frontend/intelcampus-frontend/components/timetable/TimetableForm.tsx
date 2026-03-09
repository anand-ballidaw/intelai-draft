"use client"

import { useState } from "react"
import { useTimetableStore } from "@/stores/timetable-store"

export default function TimetableForm() {

    const { addEntry } = useTimetableStore()

    const [className, setClassName] = useState("")
    const [subject, setSubject] = useState("")
    const [teacher, setTeacher] = useState("")
    const [room, setRoom] = useState("")
    const [day, setDay] = useState("Monday")
    const [period, setPeriod] = useState(1)

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        addEntry({

            id: Date.now().toString(),

            className,
            subject,
            teacher,
            room,
            day: day as any,
            period

        })

        setClassName("")
        setSubject("")
        setTeacher("")
        setRoom("")

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-3">

            <input
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="border p-2 rounded w-full"
            >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>

            <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add Timetable Entry
            </button>

        </form>

    )

}