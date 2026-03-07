import { apiClient } from "@/lib/api/api-client"

export interface Certificate {

    id: string

    studentName: string

    courseTitle: string

    issuedAt: string

    certificateUrl: string

}

export const certificateService = {

    async getCertificates(): Promise<Certificate[]> {

        const res = await apiClient.get(
            "/certificates"
        )

        return res.data

    },

    async getCertificate(
        certificateId: string
    ): Promise<Certificate> {

        const res = await apiClient.get(
            `/certificates/${certificateId}`
        )

        return res.data

    }

}