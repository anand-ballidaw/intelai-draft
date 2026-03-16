"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [

    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/dashboard/students" },
    { name: "Admissions", path: "/dashboard/admissions" },
    { name: "Departments", path: "/dashboard/departments" },
    { name: "HR", path: "/dashboard/hr" },
    { name: "Finance", path: "/dashboard/finance" },
    { name: "Transport", path: "/dashboard/transport" },
    { name: "Library", path: "/dashboard/library" },
    { name: "SmartClass", path: "/dashboard/smartclass" },
    { name: "Analytics", path: "/dashboard/analytics" }

]

export default function Sidebar() {

    const pathname = usePathname()

    return (

        <div className="w-64 h-screen bg-gray-900 text-white p-6">

            <h1 className="text-xl font-bold mb-6">
                IntelCampus
            </h1>

            <nav className="space-y-2">

                {menu.map((item) => (

                    <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-3 py-2 rounded ${pathname === item.path
                                ? "bg-blue-600"
                                : "hover:bg-gray-800"
                            }`}
                    >
                        {item.name}
                    </Link>

                ))}

            </nav>

        </div>

    )

}