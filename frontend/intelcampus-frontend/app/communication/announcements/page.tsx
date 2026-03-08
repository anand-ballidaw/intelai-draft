import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockAnnouncements } from "@/lib/mock/mock-announcements"

export default function AnnouncementsPage() {

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Announcements
            </h1>

            <div className="space-y-4">

                {mockAnnouncements.map((announcement) => (

                    <div
                        key={announcement.id}
                        className="border rounded-lg p-4"
                    >

                        <h2 className="font-semibold text-lg">
                            {announcement.title}
                        </h2>

                        <p className="text-sm text-muted-foreground mb-2">
                            {announcement.author} • {announcement.date}
                        </p>

                        <p>
                            {announcement.message}
                        </p>

                    </div>

                ))}

            </div>

        </DashboardLayout>

    )

}