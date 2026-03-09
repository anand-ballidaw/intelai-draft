import { create } from "zustand"
import { Course, Lesson, Assignment, Quiz } from "@/types/smartclass"

interface SmartClassState {

    courses: Course[]
    lessons: Lesson[]
    assignments: Assignment[]
    quizzes: Quiz[]

    addCourse: (course: Course) => void
    addLesson: (lesson: Lesson) => void
    addAssignment: (assignment: Assignment) => void
    addQuiz: (quiz: Quiz) => void

}

export const useSmartClassStore = create<SmartClassState>((set) => ({

    courses: [],
    lessons: [],
    assignments: [],
    quizzes: [],

    addCourse: (course) =>
        set((state) => ({
            courses: [...state.courses, course]
        })),

    addLesson: (lesson) =>
        set((state) => ({
            lessons: [...state.lessons, lesson]
        })),

    addAssignment: (assignment) =>
        set((state) => ({
            assignments: [...state.assignments, assignment]
        })),

    addQuiz: (quiz) =>
        set((state) => ({
            quizzes: [...state.quizzes, quiz]
        }))

}))