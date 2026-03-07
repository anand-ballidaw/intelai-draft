export function logError(error: unknown) {
    console.error("Application Error:", error)

    // Future integrations
    // Sentry.captureException(error)
    // LogRocket.captureException(error)
}

export function logInfo(message: string) {
    console.log("Info:", message)
}