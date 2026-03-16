import { create } from "zustand"

import { Course } from "../types/smartclass.types"
import { smartClassService } from "../service/smartclass.service"

interface SmartClassState {

    courses: Course[]
    loading: boolean

    fetchCourses: () => Promise<void>
    createCourse: (data: any) => Promise<void>
    deleteCourse: (id: string) => Promise<void>
}

export const useSmartClassStore = create<SmartClassState>((set) => ({

    courses: [],
    loading: false,

    fetchCourses: async () => {

        set({ loading: true })

        const courses = await smartClassService.listCourses()

        set({
            courses,
            loading: false
        })
    },

    createCourse: async (data) => {

        const course = await smartClassService.createCourse(data)

        set((state) => ({
            courses: [...state.courses, course]
        }))
    },

    deleteCourse: async (id) => {

        await smartClassService.deleteCourse(id)

        set((state) => ({
            courses: state.courses.filter((c) => c.id !== id)
        }))
    }

}))