"use client"

import React, { useState } from "react"
import CourseForm from "@/components/smartclass/CourseForm"
import CourseList from "@/components/smartclass/CourseList"
import { Course } from "@/components/smartclass/CourseCard"

export default function SmartClassPage() {

    const [courses, setCourses] = useState<Course[]>([])

    const handleCreateCourse = (course: Course) => {

        setCourses([...courses, course])

    }

    return (

        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                SmartClass Learning System
            </h1>

            <CourseForm onCreate={handleCreateCourse} />

            <CourseList courses={courses} />

        </div>

    )

}