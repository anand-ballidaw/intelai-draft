import { pushNotification } from "./notification.service"

class RealtimeService {

    startSimulation() {

        setInterval(() => {

            const events = [

                {
                    title: "New Admission",
                    message: "A student applied for Grade 9",
                    type: "admission"
                },

                {
                    title: "Assignment Submitted",
                    message: "20 students submitted Math assignment",
                    type: "academic"
                },

                {
                    title: "Payment Received",
                    message: "Student ID #2041 paid ₹5000",
                    type: "finance"
                },

                {
                    title: "Transport Alert",
                    message: "Bus Route 3 delayed",
                    type: "transport"
                }

            ]

            const event = events[Math.floor(Math.random() * events.length)]

            pushNotification(event.title, event.message, event.type)

        }, 15000)

    }

}

export const realtimeService = new RealtimeService()