import ProtectedRoute from "@/components/auth/protected-route"

export default function AnalyticsPage() {

    return (

        <ProtectedRoute requiredRole="teacher">

            <div className="space-y-10 p-6">

                <h1 className="text-2xl font-semibold">
                    Course Analytics
                </h1>

                <p className="text-gray-600">
                    Analytics and course performance insights will appear here.
                </p>

            </div>

        </ProtectedRoute>

    )

}