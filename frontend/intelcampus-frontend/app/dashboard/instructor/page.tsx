import ProtectedRoute from "@/components/auth/protected-route"

export default function InstructorDashboard() {

    return (

        <ProtectedRoute requiredRole="teacher">

            <div className="p-6">

                <h1 className="text-2xl font-semibold mb-8">
                    Instructor Overview
                </h1>

                <p className="text-gray-600">
                    Instructor dashboard features will appear here.
                </p>

            </div>

        </ProtectedRoute>

    )

}