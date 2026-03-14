"use client"

import React from "react"

export interface Course {
    id: string
    title: string
    instructor: string
    lessons: number
}

interface CourseCardProps {
    course: Course
}

export default function CourseCard({ course }: CourseCardProps) {

    return (

        <div className="border rounded-lg p-4 bg-white shadow-sm">

            <h3 className="text-lg font-semibold">
                {course.title}
            </h3>

            <p className="text-sm text-gray-500">
                Instructor: {course.instructor}
            </p>

            <p className="text-sm text-gray-500">
                Lessons: {course.lessons}
            </p>

        </div>

    )

}