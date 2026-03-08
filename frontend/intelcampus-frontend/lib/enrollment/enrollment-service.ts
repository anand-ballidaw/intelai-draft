export interface Enrollment {
    courseId: string
    enrolledAt: string
}

const STORAGE_KEY = "intelcampus_enrollments"

export function getEnrollments(): Enrollment[] {

    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) return []

    return JSON.parse(raw)

}

export function enrollCourse(courseId: string) {

    const existing = getEnrollments()

    const already = existing.find(
        (e) => e.courseId === courseId
    )

    if (already) return

    const enrollment: Enrollment = {
        courseId,
        enrolledAt: new Date().toISOString()
    }

    const updated = [...existing, enrollment]

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
    )

}

export function isEnrolled(courseId: string) {

    const existing = getEnrollments()

    return existing.some(
        (e) => e.courseId === courseId
    )

}