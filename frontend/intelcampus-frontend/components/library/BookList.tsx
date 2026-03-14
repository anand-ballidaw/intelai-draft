"use client"

import React from "react"
import BookCard, { Book } from "./BookCard"

interface BookListProps {
    books: Book[]
}

export default function BookList({ books }: BookListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {books.map((book) => (

                <BookCard
                    key={book.id}
                    book={book}
                />

            ))}

        </div>

    )

}