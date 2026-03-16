"use client"

import { Book } from "../library.types"

interface Props {

    book: Book

}

export default function BookCard({ book }: Props) {

    return (

        <div className="border rounded p-4 bg-white shadow-sm">

            <h3 className="font-semibold text-lg">
                {book.title}
            </h3>

            <p className="text-sm text-gray-500">
                Author: {book.author}
            </p>

            <p className="text-sm text-gray-500">
                Copies: {book.copies}
            </p>

        </div>

    )

}