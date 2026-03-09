"use client"

import ClassForm from "@/components/academic/ClassForm"
import SubjectForm from "@/components/academic/SubjectForm"

export default function AcademicPage() {

    return (

        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-bold">
                Academic Management
            </h1>

            <ClassForm />

            <SubjectForm />

        </div>

    )

}