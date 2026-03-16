"use client"

export default function DashboardStatus() {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold mb-2">
                System Status
            </h3>

            <ul className="text-sm space-y-1">
                <li>Students Module: Active</li>
                <li>Admissions Module: Active</li>
                <li>Finance Module: Active</li>
                <li>Transport Module: Active</li>
                <li>Library Module: Active</li>
            </ul>

        </div>

    )

}