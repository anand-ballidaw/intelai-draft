import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockResults } from "@/lib/mock/mock-exams"

export default function ResultsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Results
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>

                            <th className="p-3 text-left">Student</th>
                            <th className="p-3 text-left">Exam</th>
                            <th className="p-3 text-left">Marks</th>
                            <th className="p-3 text-left">Percentage</th>
                            <th className="p-3 text-left">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {mockResults.map((result) => (

                            <tr key={result.id} className="border-t">

                                <td className="p-3">{result.student}</td>
                                <td className="p-3">{result.exam}</td>
                                <td className="p-3">{result.marks}</td>
                                <td className="p-3">{result.percentage}%</td>

                                <td className="p-3">

                                    <span
                                        className={`px-2 py-1 rounded text-sm ${result.status === "Pass"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >

                                        {result.status}

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