"use client"

import { useEffect, useState } from "react"
import { userService, PlatformUser } from "@/services/user.service"
import { useToastStore } from "@/stores/toast.store"

export default function UserTable() {

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const [users, setUsers] =
        useState<PlatformUser[]>([])

    const loadUsers = async () => {

        try {

            const data =
                await userService.getUsers()

            setUsers(data)

        } catch {

            addToast(
                "Failed to load users",
                "error"
            )

        }

    }

    useEffect(() => {

        loadUsers()

    }, [])

    const toggleBan = async (user: PlatformUser) => {

        try {

            await userService.toggleBan(
                user.id,
                !user.banned
            )

            addToast(
                "User status updated",
                "success"
            )

            loadUsers()

        } catch {

            addToast(
                "Update failed",
                "error"
            )

        }

    }

    return (

        <div className="border rounded-xl overflow-hidden">

            <table className="w-full text-sm">

                <thead className="bg-muted">

                    <tr>

                        <th className="p-3 text-left">
                            Name
                        </th>

                        <th className="p-3 text-left">
                            Email
                        </th>

                        <th className="p-3 text-left">
                            Role
                        </th>

                        <th className="p-3 text-left">
                            Subscription
                        </th>

                        <th className="p-3 text-left">
                            Status
                        </th>

                        <th className="p-3">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr
                            key={user.id}
                            className="border-t"
                        >

                            <td className="p-3">
                                {user.name}
                            </td>

                            <td className="p-3">
                                {user.email}
                            </td>

                            <td className="p-3">
                                {user.role}
                            </td>

                            <td className="p-3">

                                {user.subscriptionActive
                                    ? "Active"
                                    : "None"}

                            </td>

                            <td className="p-3">

                                {user.banned
                                    ? "Banned"
                                    : "Active"}

                            </td>

                            <td className="p-3">

                                <button
                                    onClick={() =>
                                        toggleBan(user)
                                    }
                                    className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
                                >
                                    {user.banned
                                        ? "Unban"
                                        : "Ban"}
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )
}