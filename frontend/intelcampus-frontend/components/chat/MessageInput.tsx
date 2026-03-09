"use client"

import { useState } from "react"
import { useChatStore } from "@/stores/chat-store"

export default function MessageInput() {

    const { sendMessage } = useChatStore()

    const [content, setContent] = useState("")

    function handleSend() {

        if (!content) return

        sendMessage({

            id: Date.now().toString(),

            sender: "Teacher",

            receiver: "Student",

            content,

            createdAt: new Date().toISOString()

        })

        setContent("")

    }

    return (

        <div className="flex gap-2 mt-4">

            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type message..."
                className="border p-2 rounded w-full"
            />

            <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded"
            >
                Send
            </button>

        </div>

    )

}