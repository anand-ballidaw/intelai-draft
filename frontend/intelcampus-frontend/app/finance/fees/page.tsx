import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockFees } from "@/lib/mock/mock-finance"

export default function FeesPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Student Fees
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Student</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockFees.map((fee) => (

                            <tr key={fee.id} className="border-t">

                                <td className="p-3">{fee.student}</td>

                                <td className="p-3">₹{fee.amount}</td>

                                <td className="p-3">

                                    <span
                                        className={`px-2 py-1 rounded text-sm ${fee.status === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {fee.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}