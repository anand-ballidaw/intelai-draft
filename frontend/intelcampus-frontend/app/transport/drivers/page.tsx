import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockDrivers } from "@/lib/mock/mock-transport"

export default function DriversPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Drivers
            </h1>

            <div className="border rounded-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-muted">

                        <tr>
                            <th className="p-3 text-left">Driver</th>
                            <th className="p-3 text-left">Vehicle</th>
                            <th className="p-3 text-left">Phone</th>
                        </tr>

                    </thead>

                    <tbody>

                        {mockDrivers.map((driver) => (

                            <tr key={driver.id} className="border-t">

                                <td className="p-3">{driver.name}</td>
                                <td className="p-3">{driver.vehicle}</td>
                                <td className="p-3">{driver.phone}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    )

}