import { create } from "zustand"
import { TimetableEntry } from "@/types/timetable"

interface TimetableState {

    timetable: TimetableEntry[]

    addEntry: (entry: TimetableEntry) => void

}

export const useTimetableStore = create<TimetableState>((set) => ({

    timetable: [],

    addEntry: (entry) =>
        set((state) => ({
            timetable: [...state.timetable, entry]
        }))

}))