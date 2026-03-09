"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";

interface Props {
    onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: Props) {
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

    return (
        <header className="flex items-center justify-between border-b bg-background px-4 py-4">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-md hover:bg-muted transition"
                >
                    <Menu className="h-6 w-6" />
                </button>

                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        logout();
                        router.push("/signin");
                    }}
                >
                    Logout
                </Button>
            </div>
        </header>
    );
}