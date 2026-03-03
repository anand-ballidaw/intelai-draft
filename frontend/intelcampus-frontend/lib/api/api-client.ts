"use client"

import axios from "axios"
import { getAuthUser } from "@/lib/auth/auth-client"

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

apiClient.interceptors.request.use(
    (config) => {
        const user = getAuthUser()

        // Future JWT support
        if (user && user.subscriptionActive) {
            // Example placeholder token
            const mockToken = "mock-jwt-token"

            config.headers.Authorization = `Bearer ${mockToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Future: auto logout on JWT expiry
            localStorage.removeItem("intelcampus_user")
            window.location.href = "/login"
        }

        return Promise.reject(error)
    }
)

export default apiClient