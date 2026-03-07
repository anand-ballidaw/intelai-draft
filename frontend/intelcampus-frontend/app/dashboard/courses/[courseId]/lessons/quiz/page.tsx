import ProtectedRoute from "@/components/auth/protected-route"
import LessonQuiz from "@/components/quizzes/lesson-quiz"

interface PageProps {
    params: {
        courseId: string
        lessonId: string
    }
}

export default function QuizPage({ params }: PageProps) {
    const { lessonId } = params

    return (
        <ProtectedRoute>
            <div className="space-y-6">
                <h1 className="text-2xl font-semibold">
                    Quiz for Lesson {lessonId}
                </h1>

                <LessonQuiz />
            </div>
        </ProtectedRoute>
    )
}