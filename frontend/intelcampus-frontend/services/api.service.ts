export async function apiRequest(
    url: string,
    options: RequestInit = {}
) {

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    })

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }

    return response.json()

}