"use client"

import Link from "next/link"

interface Course {
    id: string
    title: string
    description: string
    price: number
}

const courses: Course[] = [
    {
        id: "1",
        title: "Artificial Intelligence Fundamentals",
        description: "Learn the fundamentals of AI and machine learning.",
        price: 1999
    },
    {
        id: "2",
        title: "Full Stack Web Development",
        description: "Build modern web applications using React and Node.",
        price: 2499
    }
]

export default function CoursesPage() {

    return (

        <div className="max-w-6xl mx-auto space-y-8">

            <div>

                <h1 className="text-3xl font-bold">
                    Courses
                </h1>

                <p className="text-muted-foreground">
                    Explore courses available on IntelCampus.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {courses.map((course) => (

                    <div
                        key={course.id}
                        className="border rounded-lg p-6 space-y-4"
                    >

                        <h2 className="text-lg font-semibold">
                            {course.title}
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            {course.description}
                        </p>

                        <p className="font-semibold">
                            ₹{course.price}
                        </p>

                        <Link
                            href={`/courses/${course.id}`}
                            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md"
                        >
                            View Course
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    )

}