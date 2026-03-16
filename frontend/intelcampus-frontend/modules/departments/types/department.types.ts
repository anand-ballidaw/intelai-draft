export interface Department {
    id: string
    name: string
    code: string
    description?: string

    institutionId: string
    campusId?: string

    hodId?: string

    createdAt: string
    updatedAt: string
}

export interface CreateDepartmentDTO {
    name: string
    code: string
    description?: string
    institutionId: string
    campusId?: string
    hodId?: string
}

export interface UpdateDepartmentDTO {
    name?: string
    code?: string
    description?: string
    hodId?: string
}