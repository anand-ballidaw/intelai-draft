import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockResources } from "@/lib/mock/mock-smartclass"

export default function ResourcesPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Study Resources
            </h1>

            <div className="grid gap-4">

                {mockResources.map((resource) => (

                    <div
                        key={resource.id}
                        className="border rounded-lg p-4"
                    >

                        <h2 className="font-semibold">
                            {resource.title}
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            {resource.type}
                        </p>

                    </div>

                ))}

            </div>

        </DashboardLayout>

    )

}