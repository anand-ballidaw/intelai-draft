export interface AIResponse {
    answer: string
}

class AIService {

    async ask(question: string): Promise<AIResponse> {

        const q = question.toLowerCase()

        if (q.includes("attendance")) {

            return {
                answer: "Class 10 attendance today is 92%."
            }

        }

        if (q.includes("admission")) {

            return {
                answer: "There are 34 new admissions this month."
            }

        }

        if (q.includes("finance")) {

            return {
                answer: "Opening the finance dashboard."
            }

        }

        if (q.includes("assignment")) {

            return {
                answer: "You can create assignments from the SmartClass module."
            }

        }

        return {
            answer: "I could not understand the request. Please try again."
        }

    }

}

export const aiService = new AIService()