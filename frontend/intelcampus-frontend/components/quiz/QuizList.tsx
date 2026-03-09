"use client"

import { useQuizStore } from "@/stores/quiz-store"

export default function QuizList() {

    const { quizzes } = useQuizStore()

    return (

        <div className="space-y-4 mt-6">

            {quizzes.map((quiz) => (

                <div
                    key={quiz.id}
                    className="border rounded-lg p-4 bg-white"
                >

                    <h3 className="font-semibold text-lg">
                        {quiz.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                        Class: {quiz.className}
                    </p>

                    <p className="text-xs text-gray-500">
                        Teacher: {quiz.teacher}
                    </p>

                </div>

            ))}

        </div>

    )

}