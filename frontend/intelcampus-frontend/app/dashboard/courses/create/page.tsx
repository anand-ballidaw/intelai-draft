import ProtectedRoute from "@/components/auth/protected-route"

export default function CreateCoursePage() {

    return (

        <ProtectedRoute requiredRole="teacher">

            <div className="space-y-6 p-6">

                <h1 className="text-2xl font-semibold">
                    Create Course
                </h1>

                <div className="border rounded-lg p-6 bg-white shadow">

                    <p className="text-gray-600">
                        Course creation form will appear here.
                    </p>

                </div>

            </div>

        </ProtectedRoute>

    )

}