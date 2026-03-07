"use client"

import { useState } from "react"
import QuizQuestion from "@/components/quizzes/quiz-question"
import { useQuizAttemptStore } from "@/stores/quiz-attempt.store"

const lessonId = "lesson-react-intro"

const quizData = [
    {
        question: "What is React primarily used for?",
        options: [
            "Database management",
            "Building user interfaces",
            "Server configuration",
            "Operating systems",
        ],
        answer: 1,
    },
    {
        question: "What hook is used for state in React?",
        options: [
            "useFetch",
            "useState",
            "useRouter",
            "useServer",
        ],
        answer: 1,
    },
]

export default function LessonQuiz() {
    const addAttempt = useQuizAttemptStore((s) => s.addAttempt)
    const previousAttempt = useQuizAttemptStore((s) =>
        s.getAttempt(lessonId)
    )

    const [answers, setAnswers] = useState<(number | null)[]>(
        quizData.map(() => null)
    )

    const [submitted, setSubmitted] = useState(false)

    const handleSelect = (qIndex: number, option: number) => {
        const updated = [...answers]
        updated[qIndex] = option
        setAnswers(updated)
    }

    const score = answers.reduce<number>((acc, ans, index) => {
        if (ans !== null && ans === quizData[index].answer) {
            return acc + 1
        }
        return acc
    }, 0)

    const percentage = Math.round((score / quizData.length) * 100)

    const handleSubmit = () => {
        const passed = percentage >= 60

        addAttempt({
            lessonId,
            score,
            percentage,
            passed,
            attemptedAt: new Date().toISOString(),
        })

        setSubmitted(true)
    }

    if (previousAttempt) {
        return (
            <div className="p-6 border rounded-lg max-w-xl">
                <h2 className="text-lg font-semibold mb-2">
                    Quiz Already Completed
                </h2>

                <p className="text-sm text-muted-foreground">
                    Score: {previousAttempt.score} / {quizData.length}
                </p>

                <p className="text-sm mt-2">
                    Result: {previousAttempt.percentage}%{" "}
                    {previousAttempt.passed ? "✓ Pass" : "✗ Fail"}
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <h2 className="text-xl font-semibold">
                Lesson Quiz
            </h2>

            {quizData.map((q, index) => (
                <QuizQuestion
                    key={index}
                    question={q.question}
                    options={q.options}
                    selected={answers[index]}
                    onSelect={(option) => handleSelect(index, option)}
                />
            ))}

            {!submitted && (
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Submit Quiz
                </button>
            )}

            {submitted && (
                <div className="p-4 border rounded-lg">
                    <p className="font-medium">
                        Score: {score} / {quizData.length}
                    </p>

                    <p className="text-sm text-muted-foreground mt-1">
                        Result: {percentage}% {percentage >= 60 ? "✓ Pass" : "✗ Fail"}
                    </p>
                </div>
            )}
        </div>
    )
}