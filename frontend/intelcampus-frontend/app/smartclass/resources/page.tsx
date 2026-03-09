"use client"

import CourseForm from "@/components/smartclass/CourseForm"
import CourseList from "@/components/smartclass/CourseList"

export default function SmartClassPage() {

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                SmartClass Learning System
            </h1>

            <CourseForm />

            <CourseList />

        </div>

    )

}