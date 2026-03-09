"use client"

import { useMeetingStore } from "@/stores/meeting-store"

export default function MeetingTable() {

    const { meetings, approveMeeting, rejectMeeting } = useMeetingStore()

    return (

        <table className="w-full border mt-6">

            <thead className="bg-gray-100">

                <tr>
                    <th className="border p-2">Visitor</th>
                    <th className="border p-2">Meeting With</th>
                    <th className="border p-2">Department</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                </tr>

            </thead>

            <tbody>

                {meetings.map((m) => (

                    <tr key={m.id}>

                        <td className="border p-2">{m.visitorName}</td>

                        <td className="border p-2">{m.meetingWith}</td>

                        <td className="border p-2">{m.department}</td>

                        <td className="border p-2">{m.date}</td>

                        <td className="border p-2">{m.time}</td>

                        <td className="border p-2">{m.status}</td>

                        <td className="border p-2">

                            {m.status === "pending" && (

                                <>

                                    <button
                                        onClick={() => approveMeeting(m.id)}
                                        className="bg-green-600 text-white px-2 py-1 mr-2 rounded"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => rejectMeeting(m.id)}
                                        className="bg-red-600 text-white px-2 py-1 rounded"
                                    >
                                        Reject
                                    </button>

                                </>

                            )}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}