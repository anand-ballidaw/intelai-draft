"use client"

import { useState } from "react"
import SearchResultItem from "./search-result-item"

const data = [
    {
        title: "React Fundamentals",
        href: "/dashboard/courses/1",
    },
    {
        title: "Advanced JavaScript",
        href: "/dashboard/courses/2",
    },
    {
        title: "Fullstack Web Development",
        href: "/dashboard/courses/3",
    },
    {
        title: "Lesson: React Components",
        href: "/dashboard/courses/1/lessons/2",
    },
]

export default function GlobalSearch() {
    const [query, setQuery] = useState("")

    const results = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search courses or lessons..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-background"
            />

            {query && (
                <div className="absolute mt-2 w-full border rounded-md bg-background shadow-lg">
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <SearchResultItem
                                key={index}
                                title={item.title}
                                href={item.href}
                            />
                        ))
                    ) : (
                        <p className="px-4 py-2 text-sm text-muted-foreground">
                            No results found
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}