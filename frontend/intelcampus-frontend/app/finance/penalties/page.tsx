import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockPenalties } from "@/lib/mock/mock-finance"

export default function PenaltiesPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Penalties
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">User</th>
                            <th className="p-3 text-left">Reason</th>
                            <th className="p-3 text-left">Amount</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockPenalties.map((penalty) => (

                            <tr key={penalty.id} className="border-t">

                                <td className="p-3">{penalty.user}</td>
                                <td className="p-3">{penalty.reason}</td>
                                <td className="p-3">₹{penalty.amount}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}