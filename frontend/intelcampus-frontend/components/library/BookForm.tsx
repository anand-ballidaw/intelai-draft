"use client"

import React, { useState } from "react"
import { Book } from "./BookCard"

interface BookFormProps {
    onCreate: (book: Book) => void
}

export default function BookForm({ onCreate }: BookFormProps) {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [copies, setCopies] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const book: Book = {

            id: crypto.randomUUID(),

            title,

            author,

            copies

        }

        onCreate(book)

        setTitle("")
        setAuthor("")
        setCopies(1)
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="border p-4 rounded-lg bg-white shadow-sm mb-6"
        >

            <h2 className="text-lg font-semibold mb-4">
                Add Book
            </h2>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Copies"
                    value={copies}
                    onChange={(e) => setCopies(Number(e.target.value))}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Book
            </button>

        </form>

    )

}