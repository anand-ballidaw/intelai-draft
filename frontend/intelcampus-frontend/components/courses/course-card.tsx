"use client"

import { useRouter } from "next/navigation"

interface CourseCardProps {
    id: number
    title: string
    instructor: string
    students: number
}

export default function CourseCard({
    id,
    title,
    instructor,
    students,
}: CourseCardProps) {

    const router = useRouter()

    return (

        <div className="rounded-xl border p-6 bg-background hover:shadow-md transition">

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
                Instructor: {instructor}
            </p>

            <p className="text-sm mt-3">
                Students Enrolled:
                <span className="font-medium ml-1">
                    {students}
                </span>
            </p>

            <button
                onClick={() =>
                    router.push(`/dashboard/courses/${id}`)
                }
                className="mt-4 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md"
            >
                View Course
            </button>

        </div>

    )
}