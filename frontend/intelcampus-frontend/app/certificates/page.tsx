import CertificateGenerator from "@/components/certificates/CertificateGenerator"

export default function CertificatesPage() {

    return (
        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-semibold">
                Certificate Generator
            </h1>

            <CertificateGenerator />

        </div>
    )

}