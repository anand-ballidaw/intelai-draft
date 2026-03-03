"use client";

import { useEffect } from "react";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/stores/auth.store";

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

    useEffect(() => {
        const verifySession = async () => {
            try {
                await authService.getCurrentUser();
                setAuthenticated(true);
            } catch {
                setAuthenticated(false);
            }
        };

        verifySession();
    }, [setAuthenticated]);

    return <>{children}</>;
}
