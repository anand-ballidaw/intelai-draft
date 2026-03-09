import { create } from "zustand"
import { Meeting } from "@/types/meeting"

interface MeetingState {

    meetings: Meeting[]

    createMeeting: (meeting: Meeting) => void

    approveMeeting: (id: string) => void

    rejectMeeting: (id: string) => void

}

export const useMeetingStore = create<MeetingState>((set) => ({

    meetings: [],

    createMeeting: (meeting) =>
        set((state) => ({
            meetings: [meeting, ...state.meetings],
        })),

    approveMeeting: (id) =>
        set((state) => ({
            meetings: state.meetings.map((m) =>
                m.id === id ? { ...m, status: "approved" } : m
            ),
        })),

    rejectMeeting: (id) =>
        set((state) => ({
            meetings: state.meetings.map((m) =>
                m.id === id ? { ...m, status: "rejected" } : m
            ),
        })),

}))