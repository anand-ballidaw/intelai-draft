"use client"

import React, { useState } from "react"
import BookForm from "@/components/library/BookForm"
import BookList from "@/components/library/BookList"
import { Book } from "@/components/library/BookCard"

export default function LibraryPage() {

    const [books, setBooks] = useState<Book[]>([])

    const handleCreateBook = (book: Book) => {

        setBooks([...books, book])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Library Management
            </h1>

            <BookForm onCreate={handleCreateBook} />

            <BookList books={books} />

        </div>

    )

}