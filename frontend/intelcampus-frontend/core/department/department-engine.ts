import { Department, DepartmentType } from "./department-types"

export class DepartmentEngine {

    static createDepartment(
        name: string,
        type: DepartmentType,
        hodId?: string
    ): Department {

        return {
            id: crypto.randomUUID(),
            name,
            type,
            hodId,
            staffIds: [],
            createdAt: new Date().toISOString()
        }
    }

    static assignHOD(department: Department, hodId: string): Department {
        return {
            ...department,
            hodId
        }
    }

    static addStaff(department: Department, userId: string): Department {

        if (department.staffIds.includes(userId)) {
            return department
        }

        return {
            ...department,
            staffIds: [...department.staffIds, userId]
        }
    }

    static removeStaff(department: Department, userId: string): Department {

        return {
            ...department,
            staffIds: department.staffIds.filter(id => id !== userId)
        }
    }

    static isDepartmentHOD(department: Department, userId: string): boolean {
        return department.hodId === userId
    }

    static isDepartmentStaff(department: Department, userId: string): boolean {
        return department.staffIds.includes(userId)
    }

    static getDepartmentMembers(department: Department): string[] {

        const members = [...department.staffIds]

        if (department.hodId) {
            members.push(department.hodId)
        }

        return members
    }

}