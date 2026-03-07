import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockStaff } from "@/lib/mock/mock-people"

export default function StaffPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Staff
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Department</th>
                            <th className="p-3 text-left">Email</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockStaff.map((staff) => (

                            <tr key={staff.id} className="border-t">

                                <td className="p-3">{staff.name}</td>
                                <td className="p-3">{staff.department}</td>
                                <td className="p-3">{staff.email}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}