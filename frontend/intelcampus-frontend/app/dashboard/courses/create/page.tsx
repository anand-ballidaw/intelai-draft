import ProtectedRoute from "@/components/auth/protected-route"
import CreateCourseForm from "@/components/courses/create-course-form"

export default function CreateCoursePage() {
    return (
        <ProtectedRoute requiredRole="INSTRUCTOR">
            <div className="space-y-6">
                <h1 className="text-2xl font-semibold">
                    Create Course
                </h1>

                <CreateCourseForm />
            </div>
        </ProtectedRoute>
    )
}