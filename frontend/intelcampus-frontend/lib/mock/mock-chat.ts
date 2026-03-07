export interface ChatMessage {
    id: string
    sender: string
    text: string
    time: string
}

export const mockMessages: ChatMessage[] = [
    {
        id: "1",
        sender: "Teacher Anita",
        text: "Please submit assignments before Friday.",
        time: "09:10",
    },
    {
        id: "2",
        sender: "Student Arjun",
        text: "Okay teacher, I will submit today.",
        time: "09:12",
    },
]