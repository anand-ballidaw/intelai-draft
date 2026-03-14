import { pushNotification } from "./notification.service"

export interface WorkflowEvent {
    type: string
    payload?: any
}

class WorkflowService {

    trigger(event: WorkflowEvent) {

        switch (event.type) {

            case "NEW_ADMISSION":

                pushNotification(
                    "New Admission",
                    "A new student admission has been recorded",
                    "admission"
                )

                break

            case "ASSIGNMENT_SUBMITTED":

                pushNotification(
                    "Assignment Submitted",
                    "Students have submitted an assignment",
                    "academic"
                )

                break

            case "PAYMENT_RECEIVED":

                pushNotification(
                    "Payment Received",
                    "A fee payment has been received",
                    "finance"
                )

                break

            case "TRANSPORT_DELAY":

                pushNotification(
                    "Transport Alert",
                    "A school bus route has been delayed",
                    "transport"
                )

                break

            case "ANNOUNCEMENT_CREATED":

                pushNotification(
                    "New Announcement",
                    "A new announcement has been published",
                    "communication"
                )

                break

            default:
                console.log("Unknown workflow event:", event.type)

        }

    }

}

export const workflowService = new WorkflowService()