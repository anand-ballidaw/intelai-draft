import FileUpload from "@/components/upload/FileUpload"

export default function UploadPage() {

    return (

        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-semibold">
                File Upload Center
            </h1>

            <FileUpload />

        </div>

    )

}