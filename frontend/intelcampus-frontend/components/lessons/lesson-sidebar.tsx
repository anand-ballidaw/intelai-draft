"use client"

import Link from "next/link"

const lessons = [
    { id: 1, title: "Introduction" },
    { id: 2, title: "React Components" },
    { id: 3, title: "State & Props" },
    { id: 4, title: "Hooks Overview" },
]

interface SidebarProps {
    courseId: string
}

export default function LessonSidebar({ courseId }: SidebarProps) {
    return (
        <div className="w-64 border-r p-4 space-y-3">
            <h3 className="font-semibold mb-3">Lessons</h3>

            {lessons.map((lesson) => (
                <Link
                    key={lesson.id}
                    href={`/dashboard/courses/${courseId}/lessons/${lesson.id}`}
                    className="block text-sm hover:text-primary"
                >
                    {lesson.title}
                </Link>
            ))}
        </div>
    )
}