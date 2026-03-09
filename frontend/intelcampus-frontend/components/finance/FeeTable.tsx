"use client"

import { useFinanceStore } from "@/stores/finance-store"

export default function FeeTable() {

    const { fees, payFee } = useFinanceStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Student</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Total Fee</th>
                    <th className="border p-2">Paid</th>
                    <th className="border p-2">Due</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                </tr>

            </thead>

            <tbody>

                {fees.map((f) => (

                    <tr key={f.id}>

                        <td className="border p-2">{f.studentName}</td>
                        <td className="border p-2">{f.className}</td>
                        <td className="border p-2">{f.totalFee}</td>
                        <td className="border p-2">{f.paidAmount}</td>
                        <td className="border p-2">{f.dueAmount}</td>
                        <td className="border p-2">{f.status}</td>

                        <td className="border p-2">

                            {f.dueAmount > 0 && (

                                <button
                                    onClick={() => payFee(f.id, 500)}
                                    className="bg-green-600 text-white px-2 py-1 rounded"
                                >
                                    Pay ₹500
                                </button>

                            )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}