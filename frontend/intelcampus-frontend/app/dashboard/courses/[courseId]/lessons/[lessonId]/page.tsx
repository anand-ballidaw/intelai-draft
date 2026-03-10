"use client"

interface PageProps {
    params: {
        courseId: string
        lessonId: string
    }
}

export default function LessonPage({ params }: PageProps) {

    return (

        <div className="space-y-6 p-6">

            <h1 className="text-2xl font-bold">
                Lesson
            </h1>

            <div className="border rounded-lg p-4 bg-white shadow">

                <p className="text-sm text-gray-600">
                    Course ID:
                </p>

                <p className="font-medium">
                    {params.courseId}
                </p>

            </div>

            <div className="border rounded-lg p-4 bg-white shadow">

                <p className="text-sm text-gray-600">
                    Lesson ID:
                </p>

                <p className="font-medium">
                    {params.lessonId}
                </p>

            </div>

            <div className="border rounded-lg p-6 bg-white shadow">

                <h2 className="text-lg font-semibold mb-2">
                    Lesson Content
                </h2>

                <p className="text-gray-600">
                    Lesson content and quizzes will appear here.
                </p>

            </div>

        </div>

    )

}