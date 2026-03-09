import { create } from "zustand"
import { Attendance } from "@/types/attendance"

interface AttendanceState {

    records: Attendance[]

    markAttendance: (record: Attendance) => void

}

export const useAttendanceStore = create<AttendanceState>((set) => ({

    records: [],

    markAttendance: (record) =>
        set((state) => ({
            records: [...state.records, record]
        }))

}))