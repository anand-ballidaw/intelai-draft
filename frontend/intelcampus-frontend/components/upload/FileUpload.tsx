"use client"

import { useState } from "react"

export default function FileUpload() {

    const [fileName, setFileName] = useState<string | null>(null)

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e.target.files?.[0]

        if (file) {
            setFileName(file.name)
        }

    }

    return (

        <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">

            <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
            />

            <label
                htmlFor="file-upload"
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
            >
                Upload File
            </label>

            {fileName && (

                <p className="mt-3 text-sm text-gray-600">
                    Selected File: {fileName}
                </p>

            )}

        </div>

    )

}