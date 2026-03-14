"use client"

import React from "react"
import CourseCard, { Course } from "./CourseCard"

interface CourseListProps {
    courses: Course[]
}

export default function CourseList({ courses }: CourseListProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {courses.map((course) => (

                <CourseCard
                    key={course.id}
                    course={course}
                />

            ))}

        </div>

    )

}