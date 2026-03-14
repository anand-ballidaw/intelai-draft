"use client"

import React, { useState } from "react"
import StudentForm from "@/components/students/StudentForm"
import StudentList from "@/components/students/StudentList"
import { Student } from "@/components/students/StudentCard"

export default function StudentsPage() {

    const [students, setStudents] = useState<Student[]>([])

    const handleCreateStudent = (student: Student) => {

        setStudents([...students, student])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Student Management
            </h1>

            <StudentForm onCreate={handleCreateStudent} />

            <StudentList students={students} />

        </div>

    )

}