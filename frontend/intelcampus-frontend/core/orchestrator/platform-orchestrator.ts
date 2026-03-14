import { LearningEngine } from "../learning/learning-engine"
import { EventEngine } from "../events/event-engine"
import { NotificationEngine } from "../notifications/notification-engine"
import { AnalyticsEngine } from "../analytics/analytics-engine"
import { AuditEngine } from "../audit/audit-engine"

export class PlatformOrchestrator {

    /**
     * Example orchestration:
     * Teacher creates a lesson
     */
    static createLessonWorkflow(
        teacherId: string,
        course: any,
        lessonTitle: string,
        content: string,
        studentIds: string[]
    ) {

        const { course: updatedCourse, lesson } =
            LearningEngine.addLesson(course, lessonTitle, content)

        const event = EventEngine.createEvent(
            "lesson_created",
            teacherId,
            lesson.id
        )

        const notification = NotificationEngine.createNotification(
            "New Lesson Available",
            `${lessonTitle} has been added`,
            "announcement",
            studentIds
        )

        const audit = AuditEngine.createLog(
            "lesson_created",
            teacherId,
            lesson.id
        )

        return {
            updatedCourse,
            lesson,
            event,
            notification,
            audit
        }

    }

    /**
     * Example orchestration:
     * Student submits assignment
     */
    static assignmentSubmissionWorkflow(
        studentId: string,
        assignmentId: string
    ) {

        const event = EventEngine.createEvent(
            "assignment_submitted",
            studentId,
            assignmentId
        )

        const audit = AuditEngine.createLog(
            "assignment_submitted",
            studentId,
            assignmentId
        )

        return {
            event,
            audit
        }

    }

}