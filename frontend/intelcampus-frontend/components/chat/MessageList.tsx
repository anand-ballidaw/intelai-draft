"use client"

import { useChatStore } from "@/stores/chat-store"

export default function MessageList() {

    const { messages } = useChatStore()

    return (

        <div className="border rounded-lg p-4 h-80 overflow-y-auto">

            {messages.map((m) => (

                <div key={m.id} className="mb-3">

                    <p className="text-xs text-gray-500">
                        {m.sender} → {m.receiver}
                    </p>

                    <p className="bg-gray-100 p-2 rounded mt-1">
                        {m.content}
                    </p>

                </div>

            ))}

        </div>

    )

}