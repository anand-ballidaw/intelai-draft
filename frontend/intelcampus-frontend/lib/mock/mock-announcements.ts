export interface Announcement {
    id: string
    title: string
    message: string
    author: string
    date: string
}

export const mockAnnouncements: Announcement[] = [
    {
        id: "1",
        title: "Mid Term Exams",
        message: "Mid term exams will start from March 20.",
        author: "Principal",
        date: "2026-03-06",
    },
    {
        id: "2",
        title: "Holiday Notice",
        message: "Institution will remain closed on March 10.",
        author: "Administration",
        date: "2026-03-05",
    },
]