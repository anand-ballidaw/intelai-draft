import ProtectedRoute from "@/components/auth/protected-route"
import LessonLayout from "@/components/lessons/lesson-layout"
import LessonPlayer from "@/components/lessons/lesson-player"
import LessonProgress from "@/components/lessons/lesson-progress"
import CourseProgress from "@/components/lessons/course-progress"
import { useEffect } from "react"
import { useLessonProgressStore } from "@/stores/lesson-progress.store"

interface PageProps {
    params: {
        courseId: string
        lessonId: string
    }
}

export default function LessonPage({ params }: PageProps) {
    const { courseId, lessonId } = params

    const setLastLesson = useLessonProgressStore((s) => s.setLastLesson)

    useEffect(() => {
        setLastLesson(courseId, Number(lessonId))
    }, [courseId, lessonId, setLastLesson])

    const lessonKey = `${courseId}-${lessonId}`

    return (
        <ProtectedRoute>
            <LessonLayout courseId={courseId}>
                <div className="space-y-6">
                    <CourseProgress />

                    <LessonPlayer
                        title={`Lesson ${lessonId}`}
                        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    />

                    <LessonProgress lessonKey={lessonKey} />
                </div>
            </LessonLayout>
        </ProtectedRoute>
    )
}