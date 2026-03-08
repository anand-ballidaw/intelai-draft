import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LessonProgress {
    lessonId: string
    courseId: string
    completed: boolean
}

interface ProgressState {
    lessons: LessonProgress[]
    markCompleted: (courseId: string, lessonId: string) => void
    isCompleted: (lessonId: string) => boolean
    getCourseProgress: (courseId: string, totalLessons: number) => number
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({

            lessons: [],

            markCompleted: (courseId, lessonId) => {

                set((state) => ({

                    lessons: [
                        ...state.lessons,
                        {
                            courseId,
                            lessonId,
                            completed: true,
                        },
                    ],

                }))

            },

            isCompleted: (lessonId) => {

                return get().lessons.some(
                    (l) => l.lessonId === lessonId
                )

            },

            getCourseProgress: (courseId, totalLessons) => {

                const completed = get().lessons.filter(
                    (l) => l.courseId === courseId
                ).length

                return Math.round(
                    (completed / totalLessons) * 100
                )

            },

        }),
        {
            name: "intelcampus_progress",
        }
    )
)