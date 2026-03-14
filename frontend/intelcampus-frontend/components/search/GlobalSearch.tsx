"use client"

import { useState } from "react"
import { searchService } from "@/services/search.service"
import { SearchResult } from "@/types/search"
import SearchResultItem from "./search-result-item"

export default function GlobalSearch() {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])

    const handleSearch = async (value: string) => {

        setQuery(value)

        if (!value.trim()) {
            setResults([])
            return
        }

        const data = await searchService.searchSystem(value)

        setResults(data)

    }

    return (
        <div className="relative w-full max-w-md">

            <input
                type="text"
                placeholder="Search students, courses, admissions..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border rounded-md px-3 py-2 bg-background"
            />

            {query && (

                <div className="absolute mt-2 w-full border rounded-md bg-background shadow-lg">

                    {results.length > 0 ? (

                        results.map((item) => (

                            <SearchResultItem
                                key={item.id}
                                title={item.title}
                                href={item.link}
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