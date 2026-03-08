import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockSalary } from "@/lib/mock/mock-finance"

export default function SalaryPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Staff Salary
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Staff</th>
                            <th className="p-3 text-left">Month</th>
                            <th className="p-3 text-left">Amount</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockSalary.map((salary) => (

                            <tr key={salary.id} className="border-t">

                                <td className="p-3">{salary.staff}</td>
                                <td className="p-3">{salary.month}</td>
                                <td className="p-3">₹{salary.amount}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}