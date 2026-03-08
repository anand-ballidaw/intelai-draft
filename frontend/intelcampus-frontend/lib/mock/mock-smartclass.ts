export interface Resource {
    id: string
    title: string
    type: string
}

export const mockResources: Resource[] = [
    {
        id: "1",
        title: "Introduction to Physics",
        type: "PDF",
    },
    {
        id: "2",
        title: "Algebra Basics",
        type: "PPT",
    },
    {
        id: "3",
        title: "Biology Cell Structure",
        type: "Video",
    },
]