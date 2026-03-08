"use client"

import { useEffect, useState } from "react"
import ProtectedRoute from "@/components/auth/protected-route"
import CertificateCard from "@/components/certificates/certificate-card"
import { certificateService, Certificate } from "@/services/certificate.service"

export default function CertificatesPage() {

    const [certificates, setCertificates] =
        useState<Certificate[]>([])

    const loadCertificates = async () => {

        try {

            const data =
                await certificateService.getCertificates()

            setCertificates(data)

        } catch {

            setCertificates([
                {
                    id: "CERT-12345",
                    studentName: "Demo Student",
                    courseTitle: "React Fundamentals",
                    issuedAt: "2026-03-01",
                    certificateUrl: "/demo-certificate.pdf",
                },
            ])

        }

    }

    useEffect(() => {

        loadCertificates()

    }, [])

    return (

        <ProtectedRoute requiredRole="STUDENT">

            <div className="space-y-10">

                <div>

                    <h1 className="text-2xl font-semibold">
                        Certificates
                    </h1>

                    <p className="text-muted-foreground mt-2">
                        Download your course completion certificates.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {certificates.map((cert) => (

                        <CertificateCard
                            key={cert.id}
                            id={cert.id}
                            courseTitle={cert.courseTitle}
                            issuedAt={cert.issuedAt}
                            certificateUrl={cert.certificateUrl}
                        />

                    ))}

                </div>

            </div>

        </ProtectedRoute>

    )
}