"use client"

import React from "react"
import StudentCard, { Student } from "./StudentCard"

interface StudentListProps {
    students: Student[]
}

export default function StudentList({ students }: StudentListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {students.map((student) => (

                <StudentCard
                    key={student.id}
                    student={student}
                />

            ))}

        </div>

    )

}