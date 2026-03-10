import type { Metadata } from "next";
import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
    title: "Register",
};

export default function RegisterPage() {

    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white shadow rounded-lg p-6">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h1>

                <RegisterForm />

            </div>

        </div>

    );

}