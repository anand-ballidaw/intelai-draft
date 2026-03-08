import { create } from "zustand";

export interface Course {
    id: number;
    name: string;
    students: number;
    status: "Active" | "Draft" | "Completed";
}

interface CourseState {
    courses: Course[];
    addCourse: (course: Omit<Course, "id">) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
    courses: [
        {
            id: 1,
            name: "Mathematics - Grade 10",
            students: 120,
            status: "Active",
        },
        {
            id: 2,
            name: "Science - Grade 9",
            students: 85,
            status: "Active",
        },
    ],

    addCourse: (course) =>
        set((state) => ({
            courses: [
                ...state.courses,
                {
                    id: Date.now(),
                    ...course,
                },
            ],
        })),
}));