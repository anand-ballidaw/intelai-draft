"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters required"),
});

type FormData = z.infer<typeof schema>;

const STORAGE_KEY = "intelcampus_user";

export function LoginForm() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {

        try {

            setLoading(true);
            setServerError(null);

            const storedUserRaw = localStorage.getItem(STORAGE_KEY);

            if (!storedUserRaw) {
                throw new Error("User not registered");
            }

            const storedUser = JSON.parse(storedUserRaw);

            if (storedUser.email !== data.email) {
                throw new Error("Invalid email");
            }

            console.log("Login success:", storedUser);

            router.push("/dashboard");

        } catch (error: any) {

            setServerError(error.message || "Login failed");

        } finally {

            setLoading(false);

        }
    };

    return (
        <Card className="w-full max-w-md">

            <CardHeader>
                <CardTitle>Sign in to IntelCampus</CardTitle>
            </CardHeader>

            <CardContent>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div>
                        <Input placeholder="Email" {...register("email")} />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {serverError && (
                        <p className="text-sm text-red-500">{serverError}</p>
                    )}

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>

                </form>

            </CardContent>

        </Card>
    );
}