"use client"

import { useState } from "react"
import { aiService } from "@/services/ai.service"

export default function AIAssistant() {

    const [open, setOpen] = useState(false)
    const [question, setQuestion] = useState("")
    const [response, setResponse] = useState("")

    const handleAsk = async () => {

        if (!question.trim()) return

        const result = await aiService.ask(question)

        setResponse(result.answer)

    }

    return (

        <div className="fixed bottom-6 right-6 z-50">

            {!open && (

                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                    AI Assistant
                </button>

            )}

            {open && (

                <div className="bg-white border rounded-lg shadow-xl w-80">

                    <div className="p-3 border-b flex justify-between items-center">

                        <span className="font-semibold">
                            IntelCampus AI
                        </span>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-500"
                        >
                            ×
                        </button>

                    </div>

                    <div className="p-4 space-y-3">

                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full border rounded-md px-3 py-2"
                        />

                        <button
                            onClick={handleAsk}
                            className="w-full bg-blue-600 text-white rounded-md py-2"
                        >
                            Ask
                        </button>

                        {response && (

                            <div className="text-sm bg-gray-50 p-3 rounded-md">

                                {response}

                            </div>

                        )}

                    </div>

                </div>

            )}

        </div>

    )

}