"use client"

import { useState } from "react"
import DashboardLayout from "@/components/layout/dashboard-layout"
import { mockMessages } from "@/lib/mock/mock-chat"

export default function ChatPage() {

    const [messages, setMessages] = useState(mockMessages)
    const [input, setInput] = useState("")

    const sendMessage = () => {

        if (!input.trim()) return

        const newMessage = {
            id: Date.now().toString(),
            sender: "You",
            text: input,
            time: new Date().toLocaleTimeString(),
        }

        setMessages([...messages, newMessage])
        setInput("")

    }

    return (

        <DashboardLayout>

            <h1 className="text-2xl font-bold mb-6">
                Internal Chat
            </h1>

            <div className="border rounded-lg flex flex-col h-[500px]">

                <div className="flex-1 overflow-y-auto p-4 space-y-3">

                    {messages.map((msg) => (

                        <div key={msg.id} className="text-sm">

                            <span className="font-semibold">
                                {msg.sender}
                            </span>

                            <span className="text-muted-foreground ml-2">
                                {msg.time}
                            </span>

                            <p>{msg.text}</p>

                        </div>

                    ))}

                </div>

                <div className="border-t p-3 flex gap-2">

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type message..."
                        className="flex-1 border rounded-md px-3 py-2"
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                    >
                        Send
                    </button>

                </div>

            </div>

        </DashboardLayout>

    )

}