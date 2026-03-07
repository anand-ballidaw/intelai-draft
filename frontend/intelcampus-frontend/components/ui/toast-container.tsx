"use client"

import { useToastStore } from "@/stores/toast.store"

export default function ToastContainer() {

    const toasts = useToastStore(
        (state) => state.toasts
    )

    return (

        <div className="fixed bottom-6 right-6 space-y-2 z-50">

            {toasts.map((toast) => (

                <div
                    key={toast.id}
                    className="px-4 py-2 rounded-md shadow-md bg-black text-white text-sm"
                >
                    {toast.message}
                </div>

            ))}

        </div>

    )
}