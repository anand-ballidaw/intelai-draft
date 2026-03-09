import { create } from "zustand"
import { ClassRoom, Subject, TeacherAssignment, AttendanceRecord } from "@/types/academic"

interface AcademicState {

    classes: ClassRoom[]
    subjects: Subject[]
    assignments: TeacherAssignment[]
    attendance: AttendanceRecord[]

    addClass: (c: ClassRoom) => void
    addSubject: (s: Subject) => void
    assignTeacher: (a: TeacherAssignment) => void
    markAttendance: (a: AttendanceRecord) => void

}

export const useAcademicStore = create<AcademicState>((set) => ({

    classes: [],
    subjects: [],
    assignments: [],
    attendance: [],

    addClass: (c) =>
        set((state) => ({
            classes: [...state.classes, c]
        })),

    addSubject: (s) =>
        set((state) => ({
            subjects: [...state.subjects, s]
        })),

    assignTeacher: (a) =>
        set((state) => ({
            assignments: [...state.assignments, a]
        })),

    markAttendance: (a) =>
        set((state) => ({
            attendance: [...state.attendance, a]
        })),

}))