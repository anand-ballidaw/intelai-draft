import { create } from "zustand"
import { Lead } from "@/types/lead"

interface LeadState {

    leads: Lead[]

    addLead: (lead: Lead) => void

    updateLeadStatus: (id: string, status: Lead["status"]) => void

}

export const useLeadStore = create<LeadState>((set) => ({

    leads: [],

    addLead: (lead) =>
        set((state) => ({
            leads: [lead, ...state.leads]
        })),

    updateLeadStatus: (id, status) =>
        set((state) => ({
            leads: state.leads.map((l) =>
                l.id === id ? { ...l, status } : l
            )
        }))

}))