import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockDocuments } from "@/lib/mock/mock-documents"

export default function DocumentsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Document Center
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>

                            <th className="p-3 text-left">
                                Title
                            </th>

                            <th className="p-3 text-left">
                                Owner
                            </th>

                            <th className="p-3 text-left">
                                Category
                            </th>

                            <th className="p-3 text-left">
                                Date
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {mockDocuments.map((doc) => (

                            <tr
                                key={doc.id}
                                className="border-t"
                            >

                                <td className="p-3">
                                    {doc.title}
                                </td>

                                <td className="p-3">
                                    {doc.owner}
                                </td>

                                <td className="p-3">
                                    {doc.category}
                                </td>

                                <td className="p-3">
                                    {doc.date}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}