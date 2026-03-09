import { create } from "zustand"
import { FeeRecord } from "@/types/finance"

interface FinanceState {

    fees: FeeRecord[]

    addFee: (fee: FeeRecord) => void

    payFee: (id: string, amount: number) => void

}

export const useFinanceStore = create<FinanceState>((set) => ({

    fees: [],

    addFee: (fee) =>
        set((state) => ({
            fees: [...state.fees, fee]
        })),

    payFee: (id, amount) =>
        set((state) => ({
            fees: state.fees.map((f) => {

                if (f.id !== id) return f

                const newPaid = f.paidAmount + amount
                const newDue = f.totalFee - newPaid

                return {
                    ...f,
                    paidAmount: newPaid,
                    dueAmount: newDue,
                    status:
                        newDue === 0
                            ? "paid"
                            : newPaid > 0
                                ? "partial"
                                : "due"
                }

            })
        }))

}))