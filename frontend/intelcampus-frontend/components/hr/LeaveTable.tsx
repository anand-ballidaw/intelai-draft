"use client"

import { useHRStore } from "@/stores/hr-store"

export default function LeaveTable() {

    const { leaves, approveLeave, rejectLeave } = useHRStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Employee</th>
                    <th className="border p-2">Reason</th>
                    <th className="border p-2">From</th>
                    <th className="border p-2">To</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                </tr>

            </thead>

            <tbody>

                {leaves.map((leave) => (

                    <tr key={leave.id}>

                        <td className="border p-2">{leave.employeeName}</td>
                        <td className="border p-2">{leave.reason}</td>
                        <td className="border p-2">{leave.fromDate}</td>
                        <td className="border p-2">{leave.toDate}</td>
                        <td className="border p-2">{leave.status}</td>

                        <td className="border p-2">

                            {leave.status === "pending" && (

                                <>

                                    <button
                                        onClick={() => approveLeave(leave.id)}
                                        className="bg-green-600 text-white px-2 py-1 mr-2 rounded"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => rejectLeave(leave.id)}
                                        className="bg-red-600 text-white px-2 py-1 rounded"
                                    >
                                        Reject
                                    </button>

                                </>

                            )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}