"use client"

import { useToastStore } from "@/stores/toast.store"
import Toast from "@/components/ui/toast"

export default function ToastContainer() {
    const toasts = useToastStore((state) => state.toasts)

    return (
        <div className="fixed top-4 right-4 z-50 w-80">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    )
}