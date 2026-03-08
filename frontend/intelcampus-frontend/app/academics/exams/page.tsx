import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockExams } from "@/lib/mock/mock-exams"

export default function ExamsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Exams
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="text-left p-3">Exam</th>
                            <th className="text-left p-3">Class</th>
                            <th className="text-left p-3">Date</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockExams.map((exam) => (

                            <tr key={exam.id} className="border-t">

                                <td className="p-3">{exam.name}</td>
                                <td className="p-3">{exam.class}</td>
                                <td className="p-3">{exam.date}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}