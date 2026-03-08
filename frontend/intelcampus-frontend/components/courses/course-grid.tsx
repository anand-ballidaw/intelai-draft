"use client"

import { useEffect, useState } from "react"
import CourseCard from "@/components/courses/course-card"
import { courseService, Course } from "@/services/course.service"

export default function CourseGrid() {

    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadCourses = async () => {

            try {

                const data = await courseService.getCourses()

                setCourses(data)

            } catch (err) {

                console.error("Failed to load courses", err)

            } finally {

                setLoading(false)

            }

        }

        loadCourses()

    }, [])

    if (loading) {
        return (
            <p className="text-sm text-muted-foreground">
                Loading courses...
            </p>
        )
    }

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {courses.map((course) => (

                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    students={course.students}
                />

            ))}

        </div>

    )
}