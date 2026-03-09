"use client"

import QuizForm from "@/components/quiz/QuizForm"
import QuizList from "@/components/quiz/QuizList"

export default function QuizPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Quiz / Exam Engine
            </h1>

            <QuizForm />

            <QuizList />

        </div>

    )

}