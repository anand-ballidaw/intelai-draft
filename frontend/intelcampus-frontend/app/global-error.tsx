"use client"

import { useEffect } from "react"
import { logError } from "@/lib/logger/logger"

export default function GlobalError({
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
        <html>
            <body className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-bold">
                        Something went wrong
                    </h1>

                    <p className="text-muted-foreground">
                        An unexpected error occurred.
                    </p>

                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    )
}