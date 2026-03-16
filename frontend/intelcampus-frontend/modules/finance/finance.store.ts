import { create } from "zustand"
import { Invoice } from "./finance.types"
import {
    getInvoices,
    addInvoice,
    payFee
} from "./finance.service"

interface FinanceState {

    invoices: Invoice[]

    loadInvoices: () => Promise<void>

    createInvoice: (invoice: Invoice) => Promise<void>

    payInvoice: (invoice: Invoice) => Promise<void>

}

export const useFinanceStore = create<FinanceState>((set) => ({

    invoices: [],

    loadInvoices: async () => {

        const data = await getInvoices()

        set({ invoices: data })

    },

    createInvoice: async (invoice) => {

        const newInvoice = await addInvoice(invoice)

        set((state) => ({
            invoices: [...state.invoices, newInvoice]
        }))

    },

    payInvoice: async (invoice) => {

        const updated = await payFee(invoice)

        set((state) => ({
            invoices: state.invoices.map((i) =>
                i.id === updated.id ? updated : i
            )
        }))

    }

}))