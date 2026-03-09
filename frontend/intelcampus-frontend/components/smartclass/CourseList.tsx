"use client"

import { useSmartClassStore } from "@/stores/smartclass-store"

export default function CourseList() {

    const { courses } = useSmartClassStore()

    return (

        <div className="grid grid-cols-3 gap-4 mt-6">

            {courses.map((course) => (

                <div
                    key={course.id}
                    className="border rounded-lg p-4"
                >

                    <h3 className="font-semibold text-lg">
                        {course.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                        {course.description}
                    </p>

                    <p className="text-sm mt-2">
                        Teacher: {course.teacher}
                    </p>

                </div>

            ))}

        </div>

    )

}