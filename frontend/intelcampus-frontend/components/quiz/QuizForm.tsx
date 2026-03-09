"use client"

import { useState } from "react"
import { useQuizStore } from "@/stores/quiz-store"

export default function QuizForm() {

    const { createQuiz } = useQuizStore()

    const [title, setTitle] = useState("")
    const [className, setClassName] = useState("")
    const [teacher, setTeacher] = useState("")

    function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        createQuiz({

            id: Date.now().toString(),

            title,

            className,

            teacher,

            questions: []

        })

        setTitle("")
        setClassName("")
        setTeacher("")

    }

    return (

        <form onSubmit={handleSubmit} className="space-y-3">

            <input
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <input
                placeholder="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-purple-600 text-white px-4 py-2 rounded">
                Create Quiz
            </button>

        </form>

    )

}