"use client"

import { useEffect } from "react"
import { logError } from "@/lib/logger/logger"

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        logError(error)
    }, [error])

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">
                    Something went wrong
                </h2>

                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Try again
                </button>
            </div>
        </div>
    )
}