"use client"

import { useAssignmentStore } from "@/stores/assignment-store"

export default function AssignmentList() {

    const { assignments } = useAssignmentStore()

    return (

        <div className="space-y-4 mt-6">

            {assignments.map((a) => (

                <div key={a.id} className="border rounded-lg p-4 bg-white">

                    <h3 className="font-semibold text-lg">
                        {a.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                        {a.description}
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                        Class: {a.className}
                    </p>

                    <p className="text-xs text-gray-500">
                        Due: {a.dueDate}
                    </p>

                </div>

            ))}

        </div>

    )

}