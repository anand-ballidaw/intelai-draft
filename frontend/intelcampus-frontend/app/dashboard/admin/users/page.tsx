import ProtectedRoute from "@/components/auth/protected-route"
import UserTable from "@/components/admin/user-table"

export default function AdminUsersPage() {

    return (

        <ProtectedRoute requiredRole="ADMIN">

            <div className="space-y-10">

                <div>

                    <h1 className="text-2xl font-semibold">
                        User Management
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Manage platform users and roles.
                    </p>

                </div>

                <UserTable />

            </div>

        </ProtectedRoute>

    )
}