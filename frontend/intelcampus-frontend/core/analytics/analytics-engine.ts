import { EventList } from "./analytics-types"
import { SystemEvent } from "../events/event-types"
import {
    StudentPerformance,
    RevenueAnalytics,
    AdmissionAnalytics,
    AnalyticsSummary
} from "./analytics-types"

export class AnalyticsEngine {

    static calculateStudentPerformance(events: EventList): StudentPerformance[] {

        const performanceMap: Record<string, StudentPerformance> = {}

        events.forEach((event: SystemEvent) => {

            const studentId = event.actorId

            if (!performanceMap[studentId]) {
                performanceMap[studentId] = {
                    studentId,
                    assignmentsSubmitted: 0,
                    quizzesAttempted: 0,
                    attendanceCount: 0
                }
            }

            if (event.type === "assignment_submitted") {
                performanceMap[studentId].assignmentsSubmitted += 1
            }

            if (event.type === "quiz_attempted") {
                performanceMap[studentId].quizzesAttempted += 1
            }

            if (event.type === "attendance_marked") {
                performanceMap[studentId].attendanceCount += 1
            }

        })

        return Object.values(performanceMap)

    }

    static calculateRevenue(events: EventList): RevenueAnalytics {

        const payments = events.filter(e => e.type === "fee_paid")

        let totalPayments = 0

        payments.forEach(e => {
            const amount = Number(e.metadata?.amount ?? 0)
            totalPayments += amount
        })

        return {
            totalPayments,
            paymentEvents: payments.length
        }

    }

    static calculateAdmissions(events: EventList): AdmissionAnalytics {

        const enquiries = events.filter(e => e.type === "admission_enquiry")

        return {
            enquiries: enquiries.length
        }

    }

    static generateSummary(events: EventList): AnalyticsSummary {

        return {

            students: this.calculateStudentPerformance(events),

            revenue: this.calculateRevenue(events),

            admissions: this.calculateAdmissions(events)

        }

    }

}