"use client";

import { mockUsers, MockUser } from "@/lib/mock/mock-users";
import { UserRole } from "@/lib/auth/roles";

const STORAGE_KEY = "intelcampus_user";



export type { UserRole } from "@/lib/auth/roles";


/* -----------------------------
LOGIN
------------------------------*/

export function login(email: string, password: string): MockUser {
    const user = mockUsers.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        throw new Error("Invalid credentials");
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

    return user;
}

/* -----------------------------
LOGOUT
------------------------------*/

export function logout() {
    localStorage.removeItem(STORAGE_KEY);
}

/* -----------------------------
GET CURRENT USER
------------------------------*/

export function getCurrentUser(): MockUser | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    return JSON.parse(raw);
}

/* -----------------------------
COMPATIBILITY FUNCTIONS
These are required by existing code
------------------------------*/

export function getAuthUser(): MockUser | null {
    return getCurrentUser();
}

export function isAuthenticated(): boolean {
    return !!localStorage.getItem(STORAGE_KEY);
}

export function hasRole(role: UserRole): boolean {
    const user = getCurrentUser();
    if (!user) return false;

    return user.role === role;
}

export function hasActiveSubscription(): boolean {
    return true;
}