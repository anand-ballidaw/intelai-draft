"use client"

import { useEffect } from "react"
import { useSmartClassStore } from "../store/smartclass.store"

export default function CourseList() {

    const { courses, fetchCourses } = useSmartClassStore()

    useEffect(() => {
        fetchCourses()
    }, [])

    return (

        <div className="p-6">

            <h2 className="text-xl font-semibold mb-4">
                Courses
            </h2>

            <div className="space-y-3">

                {courses.map((course) => (

                    <div
                        key={course.id}
                        className="border rounded-lg p-4"
                    >

                        <h3 className="font-semibold">
                            {course.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Code: {course.code}
                        </p>

                        {course.description && (
                            <p className="text-sm mt-1">
                                {course.description}
                            </p>
                        )}

                    </div>

                ))}

            </div>

        </div>
    )
}