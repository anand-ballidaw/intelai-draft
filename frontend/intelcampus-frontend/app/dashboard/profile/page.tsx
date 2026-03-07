import ProtectedRoute from "@/components/auth/protected-route"
import ProfileForm from "@/components/profile/profile-form"

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-2xl font-semibold mb-8">
                    Profile Settings
                </h1>

                <ProfileForm />
            </div>
        </ProtectedRoute>
    )
}