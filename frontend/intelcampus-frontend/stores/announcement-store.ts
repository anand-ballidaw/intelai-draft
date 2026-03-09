import { create } from "zustand"
import { Announcement } from "@/types/announcement"

interface AnnouncementState {

    announcements: Announcement[]

    addAnnouncement: (announcement: Announcement) => void

}

export const useAnnouncementStore = create<AnnouncementState>((set) => ({

    announcements: [],

    addAnnouncement: (announcement) =>
        set((state) => ({
            announcements: [announcement, ...state.announcements]
        }))

}))