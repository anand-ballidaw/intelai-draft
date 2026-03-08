import { apiClient } from "@/lib/api/api-client"

export interface UploadResponse {
    url: string
}

export const uploadService = {

    async uploadVideo(file: File): Promise<UploadResponse> {

        const formData = new FormData()

        formData.append("file", file)

        const res = await apiClient.post(
            "/uploads/video",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )

        return res.data
    },

}