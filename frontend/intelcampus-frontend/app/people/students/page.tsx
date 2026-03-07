import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockStudents } from "@/lib/mock/mock-people"

export default function StudentsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Students
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="text-left p-3">Name</th>
                            <th className="text-left p-3">Class</th>
                            <th className="text-left p-3">Email</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockStudents.map((student) => (

                            <tr key={student.id} className="border-t">

                                <td className="p-3">{student.name}</td>
                                <td className="p-3">{student.class}</td>
                                <td className="p-3">{student.email}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}