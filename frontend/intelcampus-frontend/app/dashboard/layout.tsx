"use client";

import { useState } from "react";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <ProtectedRoute>
            <div className="flex min-h-screen relative overflow-hidden">
                {/* Desktop Sidebar */}
                <div className="hidden md:block">
                    <DashboardSidebar />
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setOpen(false)}
                    />

                    <div
                        className={`absolute left-0 top-0 h-full transform bg-background transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <DashboardSidebar />
                    </div>
                </div>

                {/* Main */}
                <div className="flex flex-1 flex-col">
                    <DashboardHeader onMenuClick={() => setOpen(true)} />
                    <main className="flex-1 p-4 sm:p-6 bg-muted/30">{children}</main>
                </div>
            </div>
        </ProtectedRoute>
    );
}