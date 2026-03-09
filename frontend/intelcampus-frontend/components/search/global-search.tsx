"use client"

<<<<<<< HEAD
import { useSearchStore } from "@/stores/search-store"
import { searchSystem } from "@/services/search-service"
import Link from "next/link"

export default function GlobalSearch() {

    const { query, results, setQuery, setResults } = useSearchStore()

    function handleSearch(value: string) {

        setQuery(value)

        const results = searchSystem(value)

        setResults(results)

    }

    return (

        <div className="relative w-80">

            <input
                type="text"
                placeholder="Search IntelCampus..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border rounded p-2"
            />

            {results.length > 0 && (

                <div className="absolute top-10 left-0 w-full bg-white border rounded shadow-lg">

                    {results.map((r) => (

                        <Link
                            key={r.id}
                            href={r.link}
                            className="block p-2 hover:bg-gray-100"
                        >

                            <p className="font-medium">
                                {r.title}
                            </p>

                            {r.description && (

                                <p className="text-xs text-gray-500">
                                    {r.description}
                                </p>

                            )}

                        </Link>

                    ))}

                </div>

            )}

        </div>

    )

=======
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
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
}