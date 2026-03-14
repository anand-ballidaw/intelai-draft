import { Role } from "../hierarchy/role-hierarchy"

export type WorkflowType =
    | "leave_request"
    | "complaint"
    | "admission_approval"
    | "procurement"
    | "finance_approval"

export interface WorkflowStep {
    role: Role
    approved: boolean
    approvedBy?: string
    approvedAt?: string
}

export interface WorkflowInstance {

    id: string

    type: WorkflowType

    createdBy: string

    entityId?: string

    steps: WorkflowStep[]

    currentStep: number

    completed: boolean

    createdAt: string
}