import { create } from "zustand"
import { Student } from "./types/student.types"
import { studentService } from "./student.service"

interface StudentState {

    students: Student[]
    loading: boolean

    loadStudents: () => Promise<void>
    createStudent: (data: Partial<Student>) => Promise<void>
}

export const useStudentStore = create<StudentState>((set) => ({

    students: [],
    loading: false,

    loadStudents: async () => {

        set({ loading: true })

        const students = await studentService.listStudents()

        set({
            students,
            loading: false
        })

    },

    createStudent: async (data) => {

        const student = await studentService.createStudent(data)

        set((state) => ({
            students: [...state.students, student]
        }))

    }

}))