"use client"

import MessageList from "@/components/chat/MessageList"
import MessageInput from "@/components/chat/MessageInput"

export default function MessagesPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Messaging System
            </h1>

            <MessageList />

            <MessageInput />

        </div>

    )

}