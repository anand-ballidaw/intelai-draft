import { WorkflowInstance, WorkflowStep, WorkflowType } from "./workflow-types"
import { Role } from "../hierarchy/role-hierarchy"

export class WorkflowEngine {

    static createWorkflow(
        type: WorkflowType,
        createdBy: string,
        roles: Role[],
        entityId?: string
    ): WorkflowInstance {

        const steps: WorkflowStep[] = roles.map(role => ({
            role,
            approved: false
        }))

        return {
            id: crypto.randomUUID(),
            type,
            createdBy,
            entityId,
            steps,
            currentStep: 0,
            completed: false,
            createdAt: new Date().toISOString()
        }

    }

    static approveStep(
        workflow: WorkflowInstance,
        userId: string
    ): WorkflowInstance {

        if (workflow.completed) {
            return workflow
        }

        const step = workflow.steps[workflow.currentStep]

        step.approved = true
        step.approvedBy = userId
        step.approvedAt = new Date().toISOString()

        const nextStep = workflow.currentStep + 1

        if (nextStep >= workflow.steps.length) {
            return {
                ...workflow,
                currentStep: nextStep,
                completed: true
            }
        }

        return {
            ...workflow,
            currentStep: nextStep
        }

    }

    static getCurrentStep(workflow: WorkflowInstance): WorkflowStep | null {

        if (workflow.completed) {
            return null
        }

        return workflow.steps[workflow.currentStep]

    }

    static isCompleted(workflow: WorkflowInstance): boolean {
        return workflow.completed
    }

}