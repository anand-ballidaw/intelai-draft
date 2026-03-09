"use client"

import AnnouncementForm from "@/components/announcements/AnnouncementForm"
import AnnouncementList from "@/components/announcements/AnnouncementList"

export default function AnnouncementsPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Announcements
            </h1>

            <AnnouncementForm />

            <AnnouncementList />

        </div>

    )

}