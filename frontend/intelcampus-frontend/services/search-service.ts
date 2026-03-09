import { SearchResult } from "@/types/search"

export function searchSystem(query: string): SearchResult[] {

    if (!query) return []

    const data: SearchResult[] = [

        {
            id: "1",
            title: "John Student",
            description: "Class 10",
            type: "student",
            link: "/dashboard/student"
        },

        {
            id: "2",
            title: "Math Course",
            description: "Teacher: Mr Smith",
            type: "course",
            link: "/smartclass"
        },

        {
            id: "3",
            title: "Admission Lead",
            description: "Interested in Class 8",
            type: "lead",
            link: "/admissions"
        }

    ]

    return data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )

}