"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { searchService } from "@/services/search.service"
import { SearchResult } from "@/types/search"

export default function CommandPalette() {

    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])

    const router = useRouter()

    useEffect(() => {

        const down = (e: KeyboardEvent) => {

            if (e.ctrlKey && e.key === "k") {

                e.preventDefault()
                setOpen((prev) => !prev)

            }

        }

        window.addEventListener("keydown", down)

        return () => window.removeEventListener("keydown", down)

    }, [])

    useEffect(() => {

        async function search() {

            if (!query) {
                setResults([])
                return
            }

            const res = await searchService.searchSystem(query)
            setResults(res)

        }

        search()

    }, [query])

    if (!open) return null

    return (

        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-40 z-50">

            <div className="bg-white rounded-xl w-[600px] shadow-xl">

                <input
                    autoFocus
                    placeholder="Search IntelCampus..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 border-b outline-none"
                />

                <div className="max-h-80 overflow-y-auto">

                    {results.length === 0 && (

                        <p className="p-4 text-sm text-gray-500">
                            No results
                        </p>

                    )}

                    {results.map((item) => (

                        <div
                            key={item.id}
                            onClick={() => {

                                router.push(item.link)
                                setOpen(false)

                            }}
                            className="p-4 hover:bg-gray-100 cursor-pointer"
                        >

                            <p className="font-medium">{item.title}</p>

                            <p className="text-xs text-gray-500">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )

}