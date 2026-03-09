"use client"

import RouteTable from "../components/RouteTable"

export default function RoutesPage() {
    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Transport Routes
            </h1>

            <RouteTable />

        </div>
    )
}