"use client"

import { useState } from "react"

export default function GlobalSearch() {

    const [query, setQuery] = useState("")

    return (

        <input
            placeholder="Search IntelCampus..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-1 w-64"
        />

    )
}