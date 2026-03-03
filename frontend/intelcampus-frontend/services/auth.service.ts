import type { UserRole } from "@/stores/auth.store";

export interface SignInRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthUser {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}

const simulateDelay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
    async signIn(data: SignInRequest): Promise<AuthUser> {
        await simulateDelay(800);

        if (data.email === "admin@intelcampus.com" && data.password === "123456") {
            return {
                id: 1,
                name: "Management User",
                email: data.email,
                role: "MANAGEMENT",
            };
        }

        if (data.email === "student@intelcampus.com" && data.password === "123456") {
            return {
                id: 2,
                name: "Student User",
                email: data.email,
                role: "STUDENT",
            };
        }

        throw {
            response: {
                data: {
                    message: "Invalid credentials",
                },
            },
        };
    },

    async register(data: RegisterRequest): Promise<AuthUser> {
        await simulateDelay(800);

        return {
            id: 3,
            name: data.name,
            email: data.email,
            role: "STUDENT",
        };
    },

    async getCurrentUser(): Promise<AuthUser> {
        await simulateDelay(500);

        return {
            id: 1,
            name: "Management User",
            email: "admin@intelcampus.com",
            role: "MANAGEMENT",
        };
    },
};