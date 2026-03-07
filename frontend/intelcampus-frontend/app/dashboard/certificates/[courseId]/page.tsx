import ProtectedRoute from "@/components/auth/protected-route"
import CertificateView from "@/components/certificates/certificate-view"

export default function CertificatesPage() {
    return (
        <ProtectedRoute>
            <div className="space-y-10">

                <div>
                    <h1 className="text-2xl font-semibold">
                        Certificates
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Certificates earned from completed courses.
                    </p>
                </div>

                <CertificateView
                    studentName="John Doe"
                    courseTitle="React Fundamentals"
                    instructorName="Jane Smith"
                    issuedDate={new Date().toLocaleDateString()}
                />

            </div>
        </ProtectedRoute>
    )
}