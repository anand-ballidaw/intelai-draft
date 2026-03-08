import DashboardLayout from "@/components/layout/dashboard-layout"
import {
    mockDepartments,
    mockClasses,
    mockSubjects,
} from "@/lib/mock/mock-institution"

export default function InstitutionSettingsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Institution Configuration
            </h1>

            <div className="grid gap-8">

                {/* Departments */}

                <div className="border rounded-lg p-4">

                    <h2 className="font-semibold mb-4">
                        Departments
                    </h2>

                    <ul className="space-y-2">

                        {mockDepartments.map((dept) => (

                            <li key={dept.id}>
                                {dept.name}
                            </li>

                        ))}

                    </ul>

                </div>

                {/* Classes */}

                <div className="border rounded-lg p-4">

                    <h2 className="font-semibold mb-4">
                        Classes
                    </h2>

                    <ul className="space-y-2">

                        {mockClasses.map((cls) => (

                            <li key={cls.id}>
                                Class {cls.name} - Section {cls.section}
                            </li>

                        ))}

                    </ul>

                </div>

                {/* Subjects */}

                <div className="border rounded-lg p-4">

                    <h2 className="font-semibold mb-4">
                        Subjects
                    </h2>

                    <ul className="space-y-2">

                        {mockSubjects.map((sub) => (

                            <li key={sub.id}>
                                {sub.name} ({sub.department})
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </DashboardLayout>

    )

}