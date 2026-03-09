import { create } from "zustand"
import { Visitor } from "@/types/visitor"

interface VisitorState {

    visitors: Visitor[]

    addVisitor: (visitor: Visitor) => void

    checkoutVisitor: (id: string) => void

}

export const useVisitorStore = create<VisitorState>((set) => ({

    visitors: [],

    addVisitor: (visitor) =>
        set((state) => ({
            visitors: [visitor, ...state.visitors],
        })),

    checkoutVisitor: (id) =>
        set((state) => ({
            visitors: state.visitors.map((v) =>
                v.id === id
                    ? { ...v, status: "checked-out", checkOutTime: new Date().toISOString() }
                    : v
            ),
        })),

}))