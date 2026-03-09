import { create } from "zustand"
import { Quiz } from "@/types/quiz"
import { QuizAttempt } from "@/types/quiz-attempt"

interface QuizState {

    quizzes: Quiz[]

    attempts: QuizAttempt[]

    createQuiz: (quiz: Quiz) => void

    submitQuiz: (attempt: QuizAttempt) => void

}

export const useQuizStore = create<QuizState>((set) => ({

    quizzes: [],

    attempts: [],

    createQuiz: (quiz) =>
        set((state) => ({
            quizzes: [...state.quizzes, quiz]
        })),

    submitQuiz: (attempt) =>
        set((state) => ({
            attempts: [...state.attempts, attempt]
        }))

}))