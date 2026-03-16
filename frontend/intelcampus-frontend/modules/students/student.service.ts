import { Student } from "./types/student.types"
import { studentRepository } from "./student.repository"
import { eventBus } from "@/services/event-bus.service"

export const studentService = {

    async listStudents(): Promise<Student[]> {
        return studentRepository.getStudents()
    },

    async createStudent(data: Partial<Student>): Promise<Student> {

        const student = await studentRepository.createStudent(data)

        eventBus.emit("student.created", student)

        return student
    },

    async deleteStudent(id: string): Promise<void> {

        await studentRepository.deleteStudent(id)

        eventBus.emit("student.deleted", { id })

    }

}