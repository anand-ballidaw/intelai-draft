export type WorkflowStep = {

    role: string

    action: string

}

export interface WorkflowDefinition {

    id: string

    name: string

    steps: WorkflowStep[]

}

export interface WorkflowInstance {

    id: string

    workflowId: string

    currentStep: number

    status: "pending" | "approved" | "rejected"

}

class WorkflowEngine {

    private workflows: WorkflowDefinition[] = []

    registerWorkflow(workflow: WorkflowDefinition) {

        this.workflows.push(workflow)

    }

    getWorkflow(id: string): WorkflowDefinition | undefined {

        return this.workflows.find(w => w.id === id)

    }

    startWorkflow(workflowId: string): WorkflowInstance {

        return {

            id: crypto.randomUUID(),

            workflowId,

            currentStep: 0,

            status: "pending"

        }

    }

    nextStep(instance: WorkflowInstance): WorkflowInstance {

        const workflow = this.getWorkflow(instance.workflowId)

        if (!workflow) return instance

        const nextStep = instance.currentStep + 1

        if (nextStep >= workflow.steps.length) {

            return {

                ...instance,

                currentStep: nextStep,

                status: "approved"

            }

        }

        return {

            ...instance,

            currentStep: nextStep

        }

    }

}

export const workflowEngine = new WorkflowEngine()