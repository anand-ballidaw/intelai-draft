"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

import {
    enrollCourse,
    isEnrolled
} from "@/lib/enrollment/enrollment-service"

export default function CourseDetailsPage() {

    const params = useParams()

    const courseId = params.courseId as string

    const [enrolled, setEnrolled] = useState(false)

    useEffect(() => {

        setEnrolled(isEnrolled(courseId))

    }, [courseId])

    const handleEnroll = () => {

        // Mock payment success

        enrollCourse(courseId)

        setEnrolled(true)

        alert("Enrollment successful")

    }

    return (

        <div className="max-w-4xl mx-auto space-y-6">

            <h1 className="text-3xl font-bold">
                Artificial Intelligence Fundamentals
            </h1>

            <p className="text-muted-foreground">
                Course ID: {courseId}
            </p>

            <div className="border rounded-lg p-6 space-y-4">

                <p>
                    Learn the foundations of Artificial Intelligence,
                    Machine Learning and real-world AI applications.
                </p>

                <p className="font-semibold">
                    Price: ₹1999
                </p>

                {!enrolled && (

                    <button
                        onClick={handleEnroll}
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                    >
                        Enroll Now
                    </button>

                )}

                {enrolled && (

                    <Link
                        href={`/courses/${courseId}/learn/1`}
                        className="px-6 py-2 bg-green-600 text-white rounded-md inline-block"
                    >
                        Start Learning
                    </Link>

                )}

            </div>

        </div>

    )

}