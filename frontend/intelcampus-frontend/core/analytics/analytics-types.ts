import { SystemEvent } from "../events/event-types"

export interface StudentPerformance {
    studentId: string
    assignmentsSubmitted: number
    quizzesAttempted: number
    attendanceCount: number
}

export interface RevenueAnalytics {
    totalPayments: number
    paymentEvents: number
}

export interface AdmissionAnalytics {
    enquiries: number
}

export interface AnalyticsSummary {
    students: StudentPerformance[]
    revenue: RevenueAnalytics
    admissions: AdmissionAnalytics
}

export type EventList = SystemEvent[]