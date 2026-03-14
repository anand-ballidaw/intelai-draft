"use client"

import React from "react"

export interface Student {
    id: string
    name: string
    className?: string
    parentName?: string
    email?: string
}

interface StudentCardProps {
    student: Student
}

export default function StudentCard({ student }: StudentCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {student.name}
            </h3>

            <p className="text-sm text-gray-500">
                Class: {student.className ?? "Not Assigned"}
            </p>

            <p className="text-sm text-gray-500">
                Parent: {student.parentName ?? "Not Provided"}
            </p>

            <p className="text-sm text-gray-500">
                Email: {student.email ?? "Not Provided"}
            </p>

        </div>

    )

}