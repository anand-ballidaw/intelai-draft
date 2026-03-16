"use client"

import { useEffect } from "react"
import { useStudentStore } from "@/modules/students/student.store"
import StudentCard from "@/modules/students/components/StudentCard"

export default function StudentsPage() {

    const { students, loadStudents } = useStudentStore()

    useEffect(() => {

        loadStudents()

    }, [])

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Students
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {students.map((student) => (

                    <StudentCard
                        key={student.id}
                        student={student}
                    />

                ))}

            </div>

        </div>

    )

}