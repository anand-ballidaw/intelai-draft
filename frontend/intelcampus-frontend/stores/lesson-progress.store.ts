"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ProgressState {
    completedLessons: Record<string, boolean>
    lastLesson: Record<string, number>

    markComplete: (lessonKey: string) => void
    setLastLesson: (courseId: string, lessonId: number) => void
}

export const useLessonProgressStore = create<ProgressState>()(
    persist(
        (set) => ({
            completedLessons: {},
            lastLesson: {},

            markComplete: (lessonKey) =>
                set((state) => ({
                    completedLessons: {
                        ...state.completedLessons,
                        [lessonKey]: true,
                    },
                })),

            setLastLesson: (courseId, lessonId) =>
                set((state) => ({
                    lastLesson: {
                        ...state.lastLesson,
                        [courseId]: lessonId,
                    },
                })),
        }),
        {
            name: "lesson-progress",
        }
    )
)