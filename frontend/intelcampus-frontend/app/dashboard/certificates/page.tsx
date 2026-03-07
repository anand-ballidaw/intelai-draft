"use client"

import { useEffect, useState } from "react"
import { getCertificates } from "@/lib/certificates/certificate-service"

interface Certificate {
    id: string
    courseId: string
    courseTitle: string
    issuedAt: string
}

export default function CertificatesPage() {

    const [certificates, setCertificates] =
        useState<Certificate[]>([])

    useEffect(() => {

        const data = getCertificates()

        setCertificates(data)

    }, [])

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                My Certificates
            </h1>

            {certificates.length === 0 && (

                <p className="text-muted-foreground">
                    No certificates earned yet.
                </p>

            )}

            <div className="grid gap-4">

                {certificates.map((cert) => (

                    <div
                        key={cert.id}
                        className="border rounded-lg p-6 flex justify-between items-center"
                    >

                        <div>

                            <h2 className="font-semibold">
                                {cert.courseTitle}
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Certificate ID: {cert.id}
                            </p>

                        </div>

                        <a
                            href={`/verify/${cert.id}`}
                            className="px-4 py-2 border rounded-md"
                        >
                            Verify
                        </a>

                    </div>

                ))}

            </div>

        </div>

    )

}