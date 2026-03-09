<<<<<<< HEAD
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
=======
import axios from "axios";
import { ENV } from "@/constants/env";

export const api = axios.create({
    baseURL: ENV.API_BASE_URL,
    withCredentials: true,
});
>>>>>>> 71cdadf2118a068df47f425da09753ab7facf044
