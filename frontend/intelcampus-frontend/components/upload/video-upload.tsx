"use client"

import { useState } from "react"
import { uploadService } from "@/services/upload.service"
import { useToastStore } from "@/stores/toast.store"

interface Props {
    onUploaded: (url: string) => void
}

export default function VideoUpload({
    onUploaded,
}: Props) {

    const addToast = useToastStore(
        (s) => s.addToast
    )

    const [uploading, setUploading] = useState(false)

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0]

        if (!file) return

        try {

            setUploading(true)

            const result =
                await uploadService.uploadVideo(file)

            onUploaded(result.url)

            addToast(
                "Video uploaded successfully",
                "success"
            )

        } catch {

            addToast(
                "Video upload failed",
                "error"
            )

        } finally {

            setUploading(false)

        }

    }

    return (

        <div className="space-y-2">

            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
            />

            {uploading && (
                <p className="text-sm text-muted-foreground">
                    Uploading video...
                </p>
            )}

        </div>

    )
}