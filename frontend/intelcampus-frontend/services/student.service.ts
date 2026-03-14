import { Student } from "@/core/domain/Student"

export class StudentService {

    static createStudent(
        name: string,
        className?: string,
        parentName?: string,
        email?: string
    ): Student {

        return {
            id: crypto.randomUUID(),
            name,
            className,
            parentName,
            email,
            status: "active",
            createdAt: new Date().toISOString()
        }

    }

}