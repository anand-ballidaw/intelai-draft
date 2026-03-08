"use client"

import { useEffect } from "react"
import { Toast as ToastType, useToastStore } from "@/stores/toast.store"

export default function Toast({ toast }: { toast: ToastType }) {
    const removeToast = useToastStore((state) => state.removeToast)

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id)
        }, 4000)

        return () => clearTimeout(timer)
    }, [toast.id, removeToast])

    const colorStyles = {
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
        info: "bg-gray-800 text-white",
    }

    return (
        <div
            className={`px-4 py-3 rounded-md shadow-lg mb-3 text-sm ${colorStyles[toast.type]}`}
        >
            {toast.message}
        </div>
    )
}