import { apiClient } from "@/lib/api/api-client"

export type UserRole =
    | "ADMIN"
    | "INSTRUCTOR"
    | "STUDENT"

export interface PlatformUser {

    id: number

    name: string

    email: string

    role: UserRole

    subscriptionActive: boolean

    banned: boolean

}

export const userService = {

    async getUsers(): Promise<PlatformUser[]> {

        const res = await apiClient.get(
            "/admin/users"
        )

        return res.data
    },

    async updateRole(
        userId: number,
        role: UserRole
    ) {

        const res = await apiClient.put(
            `/admin/users/${userId}/role`,
            { role }
        )

        return res.data
    },

    async toggleBan(
        userId: number,
        banned: boolean
    ) {

        const res = await apiClient.put(
            `/admin/users/${userId}/status`,
            { banned }
        )

        return res.data
    }

}