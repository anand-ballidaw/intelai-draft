"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";

export function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const hasHydrated = useAuthStore((state) => state.hasHydrated);
    const router = useRouter();

    useEffect(() => {
        if (hasHydrated && !isAuthenticated) {
            router.push("/signin");
        }
    }, [isAuthenticated, hasHydrated, router]);

    if (!hasHydrated) {
        return null;
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
