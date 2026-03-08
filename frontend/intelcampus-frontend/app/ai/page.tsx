"use client"

import { useState } from "react"
import DashboardLayout from "@/components/layout/dashboard-layout"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

export default function AIAssistantPage() {

    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")

    const handleSend = () => {

        if (!input.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        }

        const aiResponse: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "This is a mock AI response. Later this will connect to an AI API.",
        }

        setMessages([...messages, userMessage, aiResponse])
        setInput("")

    }

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                IntelCampus AI Assistant
            </h1>

            <div className="border rounded-lg flex flex-col h-[500px]">

                <div className="flex-1 overflow-y-auto p-4 space-y-4">

                    {messages.map((msg) => (

                        <div
                            key={msg.id}
                            className={`p-3 rounded-lg max-w-lg ${msg.role === "user"
                                    ? "bg-blue-100 ml-auto"
                                    : "bg-gray-100"
                                }`}
                        >

                            {msg.content}

                        </div>

                    ))}

                </div>

                <div className="border-t p-4 flex gap-2">

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask something..."
                        className="flex-1 border rounded-md px-3 py-2"
                    />

                    <button
                        onClick={handleSend}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                    >
                        Send
                    </button>

                </div>

            </div>

        </DashboardLayout>

    )

}