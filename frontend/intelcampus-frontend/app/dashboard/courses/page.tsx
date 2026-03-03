import ProtectedRoute from "@/components/auth/protected-route"
import FeatureGate from "@/components/subscription/feature-gate"

export default function CoursesPage() {
    return (
        <ProtectedRoute requireSubscription>
            <FeatureGate>
                <div>
                    <h1 className="text-2xl font-semibold mb-6">
                        My Courses
                    </h1>
                    <p>Course content will appear here.</p>
                </div>
            </FeatureGate>
        </ProtectedRoute>
    )
}