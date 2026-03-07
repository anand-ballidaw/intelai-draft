"use client"

import Link from "next/link"

interface Props {
    id: string
    courseTitle: string
    issuedAt: string
    certificateUrl: string
}

export default function CertificateCard({
    id,
    courseTitle,
    issuedAt,
    certificateUrl,
}: Props) {

    return (

        <div className="border rounded-xl p-6 space-y-3">

            <h3 className="text-lg font-semibold">
                {courseTitle}
            </h3>

            <p className="text-sm text-muted-foreground">
                Issued: {issuedAt}
            </p>

            <div className="flex gap-3">

                <a
                    href={certificateUrl}
                    target="_blank"
                    className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md"
                >
                    Download PDF
                </a>

                <Link
                    href={`/verify/${id}`}
                    className="px-4 py-2 text-sm border rounded-md"
                >
                    Verify
                </Link>

            </div>

        </div>

    )
}