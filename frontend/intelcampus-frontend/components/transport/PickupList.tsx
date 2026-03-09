"use client"

import { useTransportStore } from "@/stores/transport-store"

export default function PickupList() {

    const { students, markPicked } = useTransportStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">
                <tr>
                    <th className="border p-2">Student</th>
                    <th className="border p-2">Stop</th>
                    <th className="border p-2">Picked</th>
                </tr>
            </thead>

            <tbody>

                {students.map((s) => (

                    <tr key={s.id}>

                        <td className="border p-2">{s.studentName}</td>
                        <td className="border p-2">{s.stop}</td>

                        <td className="border p-2">

                            {s.picked ? (
                                "✔"
                            ) : (
                                <button
                                    onClick={() => markPicked(s.id)}
                                    className="bg-green-600 text-white px-2 py-1 rounded"
                                >
                                    Picked
                                </button>
                            )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    )
}