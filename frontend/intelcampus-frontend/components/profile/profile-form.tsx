"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToastStore } from "@/stores/toast.store"

const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export default function ProfileForm() {
    const addToast = useToastStore((state) => state.addToast)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: "Demo User",
            email: "user@example.com",
        },
    })

    const onSubmit = async (data: ProfileFormValues) => {
        console.log("Profile update:", data)

        addToast("Profile updated successfully", "success")
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-xl"
        >
            <div>
                <label className="text-sm font-medium">Name</label>

                <input
                    {...register("name")}
                    className="mt-1 w-full border rounded-md px-3 py-2 bg-background"
                />

                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <label className="text-sm font-medium">Email</label>

                <input
                    {...register("email")}
                    className="mt-1 w-full border rounded-md px-3 py-2 bg-background"
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
                Save Changes
            </button>
        </form>
    )
}