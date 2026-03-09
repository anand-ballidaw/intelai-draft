"use client"

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

}