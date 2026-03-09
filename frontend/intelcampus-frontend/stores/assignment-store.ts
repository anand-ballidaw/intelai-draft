import { create } from "zustand"
import { Assignment } from "@/types/assignment"
import { Submission } from "@/types/submission"

interface AssignmentState {

    assignments: Assignment[]

    submissions: Submission[]

    createAssignment: (assignment: Assignment) => void

    submitAssignment: (submission: Submission) => void

}

export const useAssignmentStore = create<AssignmentState>((set) => ({

    assignments: [],

    submissions: [],

    createAssignment: (assignment) =>
        set((state) => ({
            assignments: [...state.assignments, assignment]
        })),

    submitAssignment: (submission) =>
        set((state) => ({
            submissions: [...state.submissions, submission]
        }))

}))