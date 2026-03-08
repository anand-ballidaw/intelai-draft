"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { issueCertificate } from "@/lib/certificates/certificate-service"

interface Question {
    id: string
    question: string
    options: string[]
    answer: number
}

const quiz: Question[] = [
    {
        id: "1",
        question: "What does AI stand for?",
        options: [
            "Artificial Intelligence",
            "Automatic Internet",
            "Advanced Interface",
            "Applied Integration"
        ],
        answer: 0
    },
    {
        id: "2",
        question: "Which field is closely related to AI?",
        options: [
            "Machine Learning",
            "Agriculture",
            "Mechanical Repair",
            "Construction"
        ],
        answer: 0
    }
]

export default function QuizPage() {

    const params = useParams()

    const courseId = params.courseId as string
    const quizId = params.quizId as string

    const [answers, setAnswers] = useState<number[]>([])
    const [submitted, setSubmitted] = useState(false)

    const selectAnswer = (qIndex: number, optionIndex: number) => {

        const updated = [...answers]

        updated[qIndex] = optionIndex

        setAnswers(updated)
    }

    const score = quiz.reduce((total, q, index) => {

        if (answers[index] === q.answer) {

            return total + 1

        }

        return total

    }, 0)

    const percentage = (score / quiz.length) * 100

    const submitQuiz = () => {

        setSubmitted(true)

        const passPercentage = 70

        if (percentage >= passPercentage) {

            issueCertificate(
                courseId,
                "Artificial Intelligence Fundamentals"
            )

        }

    }

    return (

        <div className="max-w-3xl mx-auto space-y-6">

            <div>

                <h1 className="text-3xl font-bold">
                    Quiz
                </h1>

                <p className="text-muted-foreground">
                    Course: {courseId} | Quiz: {quizId}
                </p>

            </div>

            {quiz.map((q, qIndex) => (

                <div
                    key={q.id}
                    className="border rounded-lg p-6 space-y-4"
                >

                    <h2 className="font-semibold">
                        {q.question}
                    </h2>

                    <div className="space-y-2">

                        {q.options.map((option, oIndex) => (

                            <label
                                key={oIndex}
                                className="flex items-center gap-2"
                            >

                                <input
                                    type="radio"
                                    name={`q-${qIndex}`}
                                    checked={answers[qIndex] === oIndex}
                                    onChange={() =>
                                        selectAnswer(qIndex, oIndex)
                                    }
                                />

                                {option}

                            </label>

                        ))}

                    </div>

                </div>

            ))}

            {!submitted && (

                <button
                    onClick={submitQuiz}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                    Submit Quiz
                </button>

            )}

            {submitted && (

                <div className="border rounded-lg p-6">

                    <h2 className="text-xl font-bold mb-2">
                        Result
                    </h2>

                    <p>
                        Score: {score} / {quiz.length}
                    </p>

                    <p>
                        Percentage: {percentage}%
                    </p>

                    {percentage >= 70 ? (

                        <p className="text-green-600 font-semibold">
                            Passed — Certificate Issued
                        </p>

                    ) : (

                        <p className="text-red-600 font-semibold">
                            Failed
                        </p>

                    )}

                </div>

            )}

        </div>

    )

}