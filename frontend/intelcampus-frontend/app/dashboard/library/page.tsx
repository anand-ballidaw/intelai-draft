"use client"

import { useEffect } from "react"
import { useLibraryStore } from "@/modules/library/library.store"
import BookCard from "@/modules/library/components/BookCard"

export default function LibraryPage() {

    const { books, loadBooks } = useLibraryStore()

    useEffect(() => {

        loadBooks()

    }, [])

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Library
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {books.map((book) => (

                    <BookCard
                        key={book.id}
                        book={book}
                    />

                ))}

            </div>

        </div>

    )

}