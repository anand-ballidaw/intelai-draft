import ProtectedRoute from "@/components/auth/protected-route"
import PlanGrid from "@/components/billing/plan-grid"

export default function BillingPage() {
    return (
        <ProtectedRoute>
            <div className="space-y-10">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Subscription & Billing
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Manage your IntelCampus subscription plan.
                    </p>
                </div>

                <PlanGrid />
            </div>
        </ProtectedRoute>
    )
}