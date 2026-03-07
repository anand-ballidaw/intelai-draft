"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToastStore } from "@/stores/toast.store"
import { courseService } from "@/services/course.service"

const courseSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(20, "Description must be at least 20 characters"),
    price: z.number().min(0, "Price must be positive"),
})

type CourseFormValues = z.infer<typeof courseSchema>

export default function CreateCourseForm() {
    const addToast = useToastStore((state) => state.addToast)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CourseFormValues>({
        resolver: zodResolver(courseSchema),
    })

    const onSubmit = async (data: CourseFormValues) => {
        try {
            await courseService.createCourse(data)

            addToast("Course created successfully", "success")

            reset()
        } catch (error: any) {
            const message =
                error?.response?.data?.message ||
                "Failed to create course"

            addToast(message, "error")
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-2xl"
        >
            <div>
                <label className="text-sm font-medium">
                    Course Title
                </label>

                <input
                    {...register("title")}
                    className="mt-1 w-full border rounded-md px-3 py-2 bg-background"
                />

                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div>
                <label className="text-sm font-medium">
                    Course Description
                </label>

                <textarea
                    {...register("description")}
                    rows={5}
                    className="mt-1 w-full border rounded-md px-3 py-2 bg-background"
                />

                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div>
                <label className="text-sm font-medium">
                    Price
                </label>

                <input
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    className="mt-1 w-full border rounded-md px-3 py-2 bg-background"
                />

                {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.price.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
            >
                Create Course
            </button>
        </form>
    )
}