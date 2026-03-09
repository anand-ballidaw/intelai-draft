const BASE_URL = "http://localhost:8080/api"

export async function apiRequest(
    endpoint: string,
    options: RequestInit = {}
) {

    const response = await fetch(`${BASE_URL}${endpoint}`, {

        headers: {
            "Content-Type": "application/json"
        },

        ...options

    })

    if (!response.ok) {
        throw new Error("API request failed")
    }

    return response.json()

}