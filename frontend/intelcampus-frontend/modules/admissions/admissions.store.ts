import { create } from "zustand"
import { Lead } from "./admissions.types"
import { getLeads, addLead } from "./admissions.service"

interface AdmissionsState {

    leads: Lead[]

    loadLeads: () => Promise<void>

    createLead: (lead: Lead) => Promise<void>

}

export const useAdmissionsStore = create<AdmissionsState>((set) => ({

    leads: [],

    loadLeads: async () => {

        const data = await getLeads()

        set({ leads: data })

    },

    createLead: async (lead) => {

        const newLead = await addLead(lead)

        set((state) => ({
            leads: [...state.leads, newLead]
        }))

    }

}))