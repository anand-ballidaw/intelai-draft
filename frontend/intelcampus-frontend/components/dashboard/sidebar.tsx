"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { cn } from "@/lib/utils";

interface Props {
    onNavigate?: () => void;
}

export function DashboardSidebar({ onNavigate }: Props) {
    const pathname = usePathname();
    const role = useAuthStore((state) => state.role);

    const navItems = [
        { name: "Overview", href: "/dashboard", roles: ["MANAGEMENT", "STUDENT"] },
        { name: "Rankings", href: "/dashboard/rankings", roles: ["MANAGEMENT", "STUDENT"] },
        { name: "Courses", href: "/dashboard/courses", roles: ["MANAGEMENT"] },
    ];

    return (
        <aside className="h-screen w-64 max-w-[85vw] border-r bg-background p-4 sm:p-6">
            <h2 className="text-lg font-bold">IntelCampus</h2>

            <nav className="mt-8 space-y-2">
                {navItems
                    .filter((item) => role && item.roles.includes(role))
                    .map((item) => {
                        const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + "/");

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onNavigate}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-sm transition-colors",
                                    isActive
                                        ? "bg-muted font-medium"
                                        : "text-muted-foreground hover:bg-muted/40"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
            </nav>
        </aside>
    );
}