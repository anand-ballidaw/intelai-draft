export type EmployeeRole =
    | "CEO"
    | "DIRECTOR"
    | "PRINCIPAL"
    | "DEAN"
    | "HOD"
    | "PROFESSOR"
    | "ASSISTANT_PROFESSOR"
    | "LECTURER"
    | "CLASS_TEACHER"
    | "ADMIN"
    | "FINANCE"
    | "HR"
    | "MARKETING"
    | "ADMISSION"
    | "LIBRARIAN"
    | "DRIVER"
    | "STAFF"

export interface Employee {
    id: string

    firstName: string
    lastName: string
    email: string
    phone?: string

    role: EmployeeRole

    departmentId?: string
    institutionId: string
    campusId?: string

    joiningDate: string
    status: "ACTIVE" | "INACTIVE"

    createdAt: string
    updatedAt: string
}

export interface CreateEmployeeDTO {
    firstName: string
    lastName: string
    email: string
    phone?: string

    role: EmployeeRole

    departmentId?: string
    institutionId: string
    campusId?: string

    joiningDate: string
}

export interface UpdateEmployeeDTO {
    firstName?: string
    lastName?: string
    phone?: string
    role?: EmployeeRole
    departmentId?: string
    status?: "ACTIVE" | "INACTIVE"
}