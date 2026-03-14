import { create } from "zustand"

export type LeadStatus = "new" | "followup" | "converted"

export interface Lead {
    id: string
    name: string
    course: string
    phone: string
    status: LeadStatus
}

interface AdmissionsState {
    leads: Lead[]

    addLead: (lead: Lead) => void

    updateLeadStatus: (id: string, status: LeadStatus) => void

    removeLead: (id: string) => void
}

export const useAdmissionsStore = create<AdmissionsState>((set) => ({

    leads: [],

    addLead: (lead) =>
        set((state) => ({
            leads: [...state.leads, lead]
        })),

    updateLeadStatus: (id, status) =>
        set((state) => ({
            leads: state.leads.map((lead) =>
                lead.id === id ? { ...lead, status } : lead
            )
        })),

    removeLead: (id) =>
        set((state) => ({
            leads: state.leads.filter((lead) => lead.id !== id)
        }))

}))