import { Student } from "./types/student.types"
import { studentsMock } from "@/mocks/students.mock"

export const studentRepository = {

    async getStudents(): Promise<Student[]> {

        return new Promise((resolve) => {
            setTimeout(() => resolve(studentsMock), 300)
        })

    },

    async getStudent(id: string): Promise<Student> {

        const student = studentsMock.find(s => s.id === id)

        if (!student) {
            throw new Error("Student not found")
        }

        return student

    },

    async createStudent(data: Partial<Student>): Promise<Student> {

        const newStudent: Student = {
            id: Date.now().toString(),
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            email: data.email || "",
            course: data.course
        }

        studentsMock.push(newStudent)

        return newStudent

    },

    async deleteStudent(id: string): Promise<void> {

        const index = studentsMock.findIndex(s => s.id === id)

        if (index !== -1) {
            studentsMock.splice(index, 1)
        }

    }

}