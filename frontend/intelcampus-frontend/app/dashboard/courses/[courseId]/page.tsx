import ProtectedRoute from "@/components/auth/protected-route"

interface PageProps {
    params: {
        courseId: string
    }
}

export default function CoursePage({ params }: PageProps) {

    return (

        <ProtectedRoute requiredRole="teacher">

            <div className="space-y-10 p-6">

                <h1 className="text-2xl font-semibold">
                    Course Details
                </h1>

                <div className="border rounded-lg p-6 bg-white shadow">

                    <p className="text-gray-600 mb-2">
                        Course ID
                    </p>

                    <p className="font-medium">
                        {params.courseId}
                    </p>

                </div>

                <div className="border rounded-lg p-6 bg-white shadow">

                    <p className="text-gray-600">
                        Lessons, assignments, and quizzes for this course will appear here.
                    </p>

                </div>

            </div>

        </ProtectedRoute>

    )

}