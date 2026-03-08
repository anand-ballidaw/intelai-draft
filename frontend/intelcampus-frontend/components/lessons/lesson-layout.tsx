"use client"

import LessonSidebar from "@/components/lessons/lesson-sidebar"

export default function LessonLayout({
    courseId,
    children,
}: {
    courseId: string
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-[70vh] border rounded-xl overflow-hidden">
            <LessonSidebar courseId={courseId} />

            <div className="flex-1 p-6">
                {children}
            </div>
        </div>
    )
}