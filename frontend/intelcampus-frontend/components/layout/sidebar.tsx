"use client"

import Link from "next/link"

export default function Sidebar() {

    return (

        <div className="hidden md:flex md:flex-col w-64 bg-white border-r">

            <div className="p-4 font-bold text-xl border-b">

                IntelCampus

            </div>

            <nav className="flex-1 p-4 space-y-2">

                <Link href="/dashboard">Dashboard</Link>

                <Link href="/students">Students</Link>

                <Link href="/staff">Staff</Link>

                <Link href="/finance">Finance</Link>

                <Link href="/transport">Transport</Link>

                <Link href="/analytics">Analytics</Link>

            </nav>

        </div>

    )
}