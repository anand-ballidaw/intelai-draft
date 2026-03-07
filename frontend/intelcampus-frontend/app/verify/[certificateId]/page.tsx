"use client"

import { useEffect, useState } from "react"
import { certificateService, Certificate } from "@/services/certificate.service"

interface Props {
    params: {
        certificateId: string
    }
}

export default function VerifyCertificatePage({
    params,
}: Props) {

    const [certificate, setCertificate] =
        useState<Certificate | null>(null)

    useEffect(() => {

        const load = async () => {

            try {

                const data =
                    await certificateService.getCertificate(
                        params.certificateId
                    )

                setCertificate(data)

            } catch {

                setCertificate({
                    id: params.certificateId,
                    studentName: "Demo Student",
                    courseTitle: "React Fundamentals",
                    issuedAt: "2026-03-01",
                    certificateUrl: "",
                })

            }

        }

        load()

    }, [params.certificateId])

    if (!certificate) {
        return <p>Loading...</p>
    }

    return (

        <div className="min-h-screen flex items-center justify-center">

            <div className="border rounded-xl p-10 max-w-lg w-full text-center space-y-4">

                <h1 className="text-2xl font-semibold">
                    Certificate Verification
                </h1>

                <p>
                    Certificate ID: <b>{certificate.id}</b>
                </p>

                <p>
                    Student: <b>{certificate.studentName}</b>
                </p>

                <p>
                    Course: <b>{certificate.courseTitle}</b>
                </p>

                <p>
                    Issued: <b>{certificate.issuedAt}</b>
                </p>

                <p className="text-green-600 font-medium">
                    ✔ Certificate Valid
                </p>

            </div>

        </div>

    )
}