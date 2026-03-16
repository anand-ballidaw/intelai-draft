"use client"

import { Student } from "../types/student.types"

interface StudentCardProps {
    student: Student
}

export default function StudentCard({ student }: StudentCardProps) {

    return (

        <div className="border rounded-lg p-4">

            <h3 className="font-semibold">
                {student.firstName} {student.lastName}
            </h3>

            <p className="text-sm text-gray-500">
                {student.email}
            </p>

            {student.course && (
                <p className="text-sm mt-1">
                    Course: {student.course}
                </p>
            )}

        </div>
    )
}