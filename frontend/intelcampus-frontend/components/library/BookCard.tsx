"use client"

import React from "react"

export interface Book {
    id: string
    title: string
    author: string
    copies: number
}

interface BookCardProps {
    book: Book
}

export default function BookCard({ book }: BookCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {book.title}
            </h3>

            <p className="text-sm text-gray-500">
                Author: {book.author}
            </p>

            <p className="text-sm text-gray-500">
                Copies Available: {book.copies}
            </p>

        </div>

    )

}