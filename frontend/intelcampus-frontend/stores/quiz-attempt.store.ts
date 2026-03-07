import { create } from "zustand"
import { persist } from "zustand/middleware"

interface QuizAttempt {
    lessonId: string
    score: number
    percentage: number
    passed: boolean
    attemptedAt: string
}

interface QuizAttemptState {
    attempts: QuizAttempt[]
    addAttempt: (attempt: QuizAttempt) => void
    getAttempt: (lessonId: string) => QuizAttempt | undefined
}

export const useQuizAttemptStore = create<QuizAttemptState>()(
    persist(
        (set, get) => ({
            attempts: [],

            addAttempt: (attempt) =>
                set((state) => ({
                    attempts: [...state.attempts, attempt],
                })),

            getAttempt: (lessonId) =>
                get().attempts.find((a) => a.lessonId === lessonId),
        }),
        {
            name: "intelcampus_quiz_attempts",
        }
    )
)