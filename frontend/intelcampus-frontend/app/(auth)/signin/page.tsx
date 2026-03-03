import type { Metadata } from "next";
import { SignInForm } from "@/components/auth/signin-form";

export const metadata: Metadata = {
    title: "Sign In",
};

export default function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Welcome Back
                </h1>
                <SignInForm />
            </div>
        </div>
    );
}