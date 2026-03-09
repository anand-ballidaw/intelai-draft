"use client"

import { useVisitorStore } from "@/stores/visitor-store"

export default function VisitorTable() {

    const { visitors, checkoutVisitor } = useVisitorStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Purpose</th>
                    <th className="border p-2">Meeting With</th>
                    <th className="border p-2">Check In</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                </tr>

            </thead>

            <tbody>

                {visitors.map((v) => (

                    <tr key={v.id}>

                        <td className="border p-2">{v.name}</td>
                        <td className="border p-2">{v.phone}</td>
                        <td className="border p-2">{v.purpose}</td>
                        <td className="border p-2">{v.meetingWith}</td>

                        <td className="border p-2">
                            {new Date(v.checkInTime).toLocaleTimeString()}
                        </td>

                        <td className="border p-2">{v.status}</td>

                        <td className="border p-2">

                            {v.status === "checked-in" && (

                                <button
                                    onClick={() => checkoutVisitor(v.id)}
                                    className="bg-green-600 text-white px-2 py-1 rounded"
                                >
                                    Checkout
                                </button>

                            )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}