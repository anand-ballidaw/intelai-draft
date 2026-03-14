"use client"

import GlobalSearch from "@/components/search/GlobalSearch"

export default function Topbar() {

    return (

        <header className="bg-white border-b px-6 py-3 flex items-center justify-between">

            {/* Mobile menu */}
            <button className="md:hidden text-xl">

                ☰

            </button>

            {/* Search */}
            <div className="flex-1 max-w-lg">

                <GlobalSearch />

            </div>

            {/* Notification */}
            <div className="flex items-center gap-4">

                🔔
                👤

            </div>


        </header>

    )
}