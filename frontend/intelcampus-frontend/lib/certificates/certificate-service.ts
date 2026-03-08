export interface Certificate {
    id: string
    courseId: string
    courseTitle: string
    issuedAt: string
}

const STORAGE_KEY = "intelcampus_certificates"

export function getCertificates(): Certificate[] {

    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) return []

    return JSON.parse(raw)

}

export function issueCertificate(
    courseId: string,
    courseTitle: string
) {

    const existing = getCertificates()

    const alreadyIssued = existing.find(
        (c) => c.courseId === courseId
    )

    if (alreadyIssued) return

    const cert: Certificate = {

        id: "CERT-" + Math.floor(Math.random() * 100000),

        courseId,

        courseTitle,

        issuedAt: new Date().toISOString()

    }

    const updated = [...existing, cert]

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    )

}