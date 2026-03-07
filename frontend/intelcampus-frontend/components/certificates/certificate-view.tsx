"use client"

import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface CertificateViewProps {
    studentName: string
    courseTitle: string
    instructorName: string
    issuedDate: string
}

export default function CertificateView({
    studentName,
    courseTitle,
    instructorName,
    issuedDate,
}: CertificateViewProps) {

    const certificateRef = useRef<HTMLDivElement>(null)

    const downloadCertificate = async () => {
        if (!certificateRef.current) return

        const canvas = await html2canvas(certificateRef.current)

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF("landscape", "px", "a4")

        const width = pdf.internal.pageSize.getWidth()
        const height = pdf.internal.pageSize.getHeight()

        pdf.addImage(imgData, "PNG", 0, 0, width, height)

        pdf.save("intelcampus-certificate.pdf")
    }

    return (
        <div className="space-y-6">

            <div
                ref={certificateRef}
                className="max-w-4xl mx-auto border rounded-xl p-12 bg-white text-black shadow-lg"
            >
                <div className="text-center space-y-6">

                    <h1 className="text-4xl font-bold tracking-wide">
                        Certificate of Completion
                    </h1>

                    <p className="text-lg">
                        This certificate is proudly presented to
                    </p>

                    <p className="text-3xl font-semibold">
                        {studentName}
                    </p>

                    <p className="text-lg">
                        for successfully completing the course
                    </p>

                    <p className="text-2xl font-semibold">
                        {courseTitle}
                    </p>

                    <p className="text-sm text-gray-600">
                        Issued on {issuedDate}
                    </p>

                    <div className="flex justify-between mt-12 text-sm">

                        <div className="text-center">
                            <div className="border-t pt-2 w-40">
                                Instructor
                            </div>
                            <p>{instructorName}</p>
                        </div>

                        <div className="text-center">
                            <div className="border-t pt-2 w-40">
                                IntelCampus
                            </div>
                            <p>Official Certificate</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={downloadCertificate}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Download Certificate (PDF)
                </button>
            </div>

        </div>
    )
}