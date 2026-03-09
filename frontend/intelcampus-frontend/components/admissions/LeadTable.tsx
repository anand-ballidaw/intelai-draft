"use client"

import { useLeadStore } from "@/stores/lead-store"

export default function LeadTable() {

    const { leads, updateLeadStatus } = useLeadStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Source</th>
                    <th className="border p-2">Status</th>
                </tr>

            </thead>

            <tbody>

                {leads.map((lead) => (

                    <tr key={lead.id}>

                        <td className="border p-2">{lead.name}</td>
                        <td className="border p-2">{lead.phone}</td>
                        <td className="border p-2">{lead.interestedClass}</td>
                        <td className="border p-2">{lead.source}</td>

                        <td className="border p-2">

                            <select
                                value={lead.status}
                                onChange={(e) =>
                                    updateLeadStatus(lead.id, e.target.value as any)
                                }
                                className="border p-1 rounded"
                            >

                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="interested">Interested</option>
                                <option value="admission-taken">Admission Taken</option>
                                <option value="lost">Lost</option>

                            </select>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}