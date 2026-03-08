import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockRoutes } from "@/lib/mock/mock-transport"

export default function RoutesPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Bus Routes
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Route</th>
                            <th className="p-3 text-left">Driver</th>
                            <th className="p-3 text-left">Vehicle</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockRoutes.map((route) => (

                            <tr key={route.id} className="border-t">

                                <td className="p-3">{route.name}</td>
                                <td className="p-3">{route.driver}</td>
                                <td className="p-3">{route.vehicle}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}