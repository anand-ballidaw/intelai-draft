import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockAttendance } from "@/lib/mock/mock-attendance"

export default function AttendancePage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Attendance
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>

                            <th className="text-left p-3">Name</th>
                            <th className="text-left p-3">Role</th>
                            <th className="text-left p-3">Date</th>
                            <th className="text-left p-3">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {mockAttendance.map((record) => (

                            <tr key={record.id} className="border-t">

                                <td className="p-3">{record.name}</td>
                                <td className="p-3">{record.role}</td>
                                <td className="p-3">{record.date}</td>
                                <td className="p-3">

                                    <span
                                        className={`px-2 py-1 rounded text-sm ${record.status === "Present"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >

                                        {record.status}

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