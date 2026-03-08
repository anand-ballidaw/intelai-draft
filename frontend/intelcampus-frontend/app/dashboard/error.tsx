"use client"

import { useEffect } from "react"
import { logError } from "@/lib/logger/logger"

export default function DashboardError({
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
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <h2 className="text-2xl font-semibold">
                Dashboard Error
            </h2>

            <p className="text-muted-foreground">
                Something failed while loading this module.
            </p>

            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
                Reload
            </button>
        </div>
    )
}