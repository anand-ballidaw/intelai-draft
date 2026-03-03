import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
    title: "Register",
};

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Create Your Account
                </h1>
                <RegisterForm />
            </div>
        </div>
    );
}