import ProtectedRoute from "@/components/auth/protected-route"

export default function CoursesPage() {

    return (

        <ProtectedRoute requiredRole="student">

            <div className="space-y-10 p-6">

                <h1 className="text-2xl font-semibold">
                    My Courses
                </h1>

                <div className="border rounded-lg p-6 bg-white shadow">

                    <p className="text-gray-600">
                        Your enrolled courses will appear here.
                    </p>

                </div>

            </div>

        </ProtectedRoute>

    )

}